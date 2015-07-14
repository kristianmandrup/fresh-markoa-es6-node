'use strict';

import Setup from './setup';
import Executer from './executer';
import config from './config';
import defaults from './defaults';
import marko from './marko';
import middleware from './middleware';
import render from './render';
import routes from './routes';
import state from './state';

var extend = Object.assign;

export default {
  config: config,
  executor: Executer,
  render: render,
  routes: routes,
  marko: marko,
  middleware: middleware,
  state: state,
  setup: Setup
}

export class Server {
  constructor(config = {}) {
    this.config = {
      mounted: {}
    };
    this.config = extend(this.config, config);
  }

  setup() {
    this.setup = new Setup(this.config);
    this.setup.configureApp();
  }

  mount(config, name) {
    var mounter = typeof name === 'string' ? this.mountModule : this.mountConfig;
    mounter(config, name);
    return this;
    // this.setup.configure(config);
  }

  mountModule(config, name) {
    this.config.mounted[name] = config;
  }

  mountConfig(config) {
    this.config = extend(this.config, config);
  }
}