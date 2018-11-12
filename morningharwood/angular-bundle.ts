import 'zone.js/dist/zone-node';
import 'reflect-metadata';


const APP_NAME = 'morningharwood';

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist/apps/${APP_NAME}-server/main`);

export {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
};
