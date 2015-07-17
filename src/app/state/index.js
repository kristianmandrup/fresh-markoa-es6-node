'use strict';

import Content from './content';
import Globals from './globals';
import Pages from './pages';
import Providers from'./providers';
import Sessions from'./sessions';
import Stores from'./stores';
import AppData from'./app-data';
import Configurator from '../configurator';

export default class State extends Configurator {
  constructor(config) {
    super(config);
  }

  configure() {
    this.appData = new AppData(this.config);
    return this;
  }

  // will all use defaults since missing second argument
  static createDefault(config, name) {
    var props = {
      app: name
    };
    var state = new State(config);
    this.content = new Content(config, props);
    this.pages = new Pages(config, props);
    this.sessions = new Sessions(config, props);

    // TODO: use decorators!!!
    this.globals = new Globals(config, props);
    this.providers = new Providers(config, props);
    this.stores = new Stores(config, props);
  }
}
