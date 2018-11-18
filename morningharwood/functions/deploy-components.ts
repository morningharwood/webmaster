/**
 * @fileoverview This file will read each component of specified application and
 * by convention save each component with a static method off to
 * firebase collection named components.
 * @notes: At somepoint move to a cloud function but first we need to be able
 * to read a bundle on the server similar to routes!
 */
import * as admin from 'firebase-admin';
import * as globby from 'globby';
import * as path from 'path';
import {
  get,
  isFunction,
} from 'lodash';
import * as humanizeString from 'humanize-string';
import { removeExt } from 'path-extra';
import { lsRoutes } from '../ls-routes';
import {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
} from '../angular-bundle';
import * as url from 'url';


const serviceAccount = require('./service-token.json');
const removeExtAndJoinDir = i => path.join(__dirname, removeExt(i));
const mapRemoveExtAndJoinDir = (g) => g.map(removeExtAndJoinDir);
const COMPONENT_COLLECTION = 'components';
const ROUTES_COLLECTION = 'routes';


const hasValidSchema = (ref) => ([
  get(ref, `[${ Object.keys(ref)[ 0 ] }].getSchema`, false),
  get(ref, `[${ Object.keys(ref)[ 0 ] }]`),
]);

async function publishComponents(glob, db) {
  for (const dp of await globby(glob)
    .then(mapRemoveExtAndJoinDir)) {
    const [ schemaFn, refKey ] = hasValidSchema(await require(dp));

    if (isFunction(schemaFn)) {
      const docRef = db.collection(COMPONENT_COLLECTION)
                       .doc(refKey.name);
      docRef.set({
        schema: schemaFn(),
        name: humanizeString(refKey.name),
        docKey: refKey.name,
      }, { merge: true });

    }
  }
}

function initFirebase() {
  // Add firebase cred and connection
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  return admin.firestore();
}


function publishRoutes(routes: any, db: admin.firestore.Firestore) {
  for (const route of routes) {

    const r = url.parse(route)
      .pathname;
    const routeSplit = r.split('/')
                        .filter(Boolean);
    const docKey = routeSplit.length
                   ? routeSplit.join('_')
                   : 'root';

    const docRef = db.collection(ROUTES_COLLECTION)
                     .doc(docKey);
    docRef.set({
      path: r,
      name: humanizeString(docKey),
      docKey,
    }, { merge: true });
  }
}

async function main() {

  const routes = await lsRoutes(AppServerModuleNgFactory, LAZY_MODULE_MAP);
  routes.unshift('/');

  const db = initFirebase();
  await publishComponents(
    '../libs/**/*.component.ts',
    db,
  );
  publishRoutes(
    routes,
    db,
  );
}

main();
