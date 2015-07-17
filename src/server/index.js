'use strict';

import Setup from './setup';
import Mounter from '../app/mounter';
import Settings from './settings';
import Configurator from './configurator';
import Runner from './runner';
import Marko from './marko';
import Middleware from './middleware';
import Render from './render';
import Routes from './routes';
import utils from '../utils';

// all public methods return this to allow chaining!
export default class Server extends Configurator {
  constructor(config = {}, options = {}) {
    this.options = options;
    this.config = {};
    this.config.utils = utils;

    // TODO: allow injection!
    this.mounter = new Mounter(config);
    this.settings = new Settings(this.config, this.options).configure();

    this.config.current = {
      rootPath: this.rootPath
    };

    this.init(config);
  }

  // TODO: allow injection!
  init(config) {
    this.render = new Render(config);
    this.middleware = new Middleware(config);
    this.marko = new Marko(config);
    this.runner = new Runner(config);
    this.routes = new Routes(config);
  }

  app(name) {
    return this.config.mounted[name];
  }

  get rootPath() {
    return this.config.settings.rootPath;
  }

  get settings() {
    return this.config.settings;
  }

  set settings(settings) {
    this.config.settings = settings;
  }

  // after this.config is configured
  // we to use it to setup Server
  setup() {
    this.setup = new Setup(this.config).configureApp();
    return this;
  }

  // allows full customization of server config
  customize(cb) {
    cb(this.config, this);
    return this;
  }

  // TODO: should mount methods be moved to Application?
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
    this.config = Object.assign(this.config, config);
    return this;
  }
}
