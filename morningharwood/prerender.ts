// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { join } from 'path';
import { enableProdMode } from '@angular/core';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { lsRoutes } from './ls-routes';


const domino = require('domino');


const template = fs.readFileSync(join('.', 'dist/apps/morningharwood', 'index.html'))
                   .toString();
const win = domino.createWindow(template);

// global[ 'window' ] = win;
global[ 'document' ] = win.document;

(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const APP_NAME = 'morningharwood';

// leave this as require(), imported via webpack
console.log('******'.repeat(100));
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
} = require(`./dist/apps/${APP_NAME}-server/main`);

enableProdMode();

async function prerender() {
  // Get the app index
  const browserBuild = `dist/apps/${APP_NAME}`;
  const index = await fse.readFile(join(browserBuild, 'index.html'), 'utf8');
  const routes = await lsRoutes(AppServerModuleNgFactory, LAZY_MODULE_MAP);
  routes.unshift('/');
  // Loop over each route
  for (const route of routes) {
    const pageDir = join(browserBuild, route);
    await fse.ensureDir(pageDir);

    // Render with Universal
    const html = await renderModuleFactory(AppServerModuleNgFactory, {
      document: index,
      url: route,
      extraProviders: [ provideModuleMap(LAZY_MODULE_MAP) ],
    });
    await fse.writeFile(join(pageDir, 'index.html'), html);
  }

  console.log('done rendering :)');
  process.exit();
}


prerender();
