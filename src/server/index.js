'use strict';

import Setup from './setup';

var extend = Object.assign;


import config from './config';
import executer from './executer';
import render from './render';
import routes from './routes';
import marko from './marko';
import middleware from './middleware';
import state from './state';
import setup from './setup';

export default {
  config: config,
  executor: executer,
  render: render,
  routes: routes,
  marko: marko,
  middleware: middleware,
  state: state,
  setup: setup
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