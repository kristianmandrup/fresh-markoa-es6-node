'use strict';

import Content from './content';
import AppData from './app-data';
import Globals from './globals';
import Pages from './pages';
import Providers from'./providers';
import Sessions from'./sessions';
import Stores from'./stores';

import Configurator from '../../configurator';

export default class State extends Configurator {
  constructor(config) {
    super(config);
    this.content = new Content(config);
    this.appData = new AppData(config).configure();
    this.globals = new Globals(config);
    this.pages = new Pages(config);
    this.providers = new Providers(config);
    this.sessions = new Sessions(config);
    this.stores = new Stores(config);
  }
}
