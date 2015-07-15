'use strict';

import Setup from './setup';
import Executer from './executer';
import defaults from './defaults';
import marko from './marko';
import middleware from './middleware';
import render from './render';
import routes from './routes';
import state from './state';
import views from './views';

var extend = Object.assign;

export default {
  executor: Executer,
  defaults: defaults,
  marko: marko,
  middleware: middleware,
  render: render,
  routes: routes,
  state: state,
  setup: Setup,
  views: views
}

export class Server {
  constructor(config = {}) {
    this.config = {
      mounted: {}
    };
    this.config = extend(this.config, config);
  }

  // allows full customization of server config
  customize(cb) {
    cb(this.config, this);
  }

  mount(config, name) {
    var mounter = typeof name === 'string' ? this.mountModule : this.mountConfig;
    mounter(config, name);
    return this;
  }

  mountModule(config, name) {
    this.config.mounted[name] = config;
  }

  mountConfig(config) {
    this.config = extend(this.config, config);
  }

  // after this.config is configured
  // we to use it to setup Server
  setup() {
    this.setup = new Setup(this.config);
    this.setup.configureApp();
  }
}