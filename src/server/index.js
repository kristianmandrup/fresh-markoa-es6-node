'use strict';

import Setup from './setup';
import Mounter from './application/mounter';
import Configurator from './configurator';
import Initializer from './initializer';
import Defaults from './defaults';

var extend = Object.assign;

import utils from '../utils';

// all public methods return this to allow chaining!
export default class Server extends Configurator {
  constructor(config = {}, options = {}) {
    this.options = options;
    this.config = {};
    this.config.utils = utils;

    this.mounter = new Mounter(config);

    // Move to Initializer?
    this.config.defaults = new Defaults(config, options).configure();

    this.config = extend(this.config, this.config.defaults.settings, config);
    this.config.current = {
      rootPath: this.config.rootPath
    };
    // PROBLEM!!
    this.initializer = new Initializer(config).init();
  }

  // allows full customization of server config
  customize(cb) {
    cb(this.config, this);
    return this;
  }

  mount(config, name) {
    this[this.mountMethod(name)](config, name);
    return this;
  }

  mountMethod(name) {
    return typeof name === 'string' ? 'mountApp' : 'mountConfig';
  }

  mountApp(config, name) {
    this.mounter.mount(config, name);
    return this;
  }

  unmountApp(config, name) {
    this.mounter.unmount(name);
    return this;
  }

  mountConfig(config) {
    this.config = extend(this.config, config);
    return this;
  }

  // after this.config is configured
  // we to use it to setup Server
  setup() {
    this.setup = new Setup(this.config).configureApp();
    return this;
  }
}
