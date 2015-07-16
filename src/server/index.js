'use strict';

import Setup from './setup';
import Executer from './executer';
import Defaults from './defaults';
import Marko from './marko';
import Middleware from './middleware';
import Render from './render';
import Routes from './routes';
import Views from './views';
import State from './state';
import Loader from './loader';

var extend = Object.assign;

import utils from '../utils';

// all public methods return this to allow chaining!
export default class Server {
  constructor(config = {}, options = {}) {
    this.options = options;
    this.config = {};
    this.config.utils = utils;
    this.config.defaults = new Defaults(config, options).configure();

    this.config = extend(this.config, this.config.defaults.settings, config);
    this.config.current = {
      rootPath: this.config.rootPath
    };

    this.init();
  }

  init() {
    var config = this.config;
    this.config.loader = new Loader(config).loaders;
    this.config.state = new State(config);
    this.config.state.configureAppData();

    this.config.routes = new Routes(config);
    this.config.render = new Render(config);
    this.config.middleware = new Middleware(config);
    this.config.marko = new Marko(config);
    this.config.executer = new Executer(config);
    this.config.views = new Views(config).configure();
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
