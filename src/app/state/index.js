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
    state.content = new Content(config, props);
    state.pages = new Pages(config, props);
    state.sessions = new Sessions(config, props);

    state.globals = new Globals(config, props);
    state.providers = new Providers(config, props);
    state.stores = new Stores(config, props);
    return state;
  }
}
