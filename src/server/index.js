'use strict';

var Setup;
// import Setup from './setup';
// import Executer from './executer';
// import defaults from './defaults';
// import marko from './marko';
import Middleware from './middleware';
import Render from './render';
import Routes from './routes';
// import state from './state';
// import views from './views';

var extend = Object.assign;

// export default {
//   executor: Executer,
//   defaults: defaults,
//   marko: marko,
//   middleware: middleware,
//   render: render,
//   routes: routes,
//   state: state,
//   setup: Setup,
//   views: views
// }

import path from 'path';
import utils from '../utils';

// all public methods return this to allow chaining!
export default class Server {
  constructor(config = {}) {
    this.config = extend(this.defaultConfig, config);
    this.config.utils = utils;
    this.config.current = {};
    this.config.routes = new Routes(config);
    this.config.render = new Render(config);
    this.config.middleware = new Middleware(config);
  }

  get defaultConfig() {
    return {
      mounted: {},
      rootPath: path.resolve(path.join(__dirname, '../../'))
    };
  }

  // allows full customization of server config
  customize(cb) {
    cb(this.config, this);
    return this;
  }

  mount(config, name) {
    var mountMethod = typeof name === 'string' ? 'mountModule' : 'mountConfig';
    this[mountMethod](config, name);
    return this;
  }

  mountModule(config, name) {
    this.config.mounted[name] = config;
    return this;
  }

  unmountModule(config, name) {
    delete this.config.mounted[name];
    return this;
  }

  mountConfig(config) {
    this.config = extend(this.config, config);
    return this;
  }

  // after this.config is configured
  // we to use it to setup Server
  setup() {
    this.setup = new Setup(this.config);
    this.setup.configureApp();
    return this;
  }
}
