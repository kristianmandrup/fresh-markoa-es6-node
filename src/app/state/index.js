'use strict';

import Content from './content';
import Globals from './globals';
import Pages from './pages';
import Providers from'./providers';
import Sessions from'./sessions';
import Stores from'./stores';
import Configurator from '../../server/configurator';

export default class State extends Configurator {
  // TODO: setup using config!
  constructor(config) {
    super(config);
    State.init(this, config);
  }

  // will all use defaults ;)
  // props contains the default data object for all default state
  // props = {name: 'index', props: {...}}
  static createDefault(config, props) {
    let state = new State(config);
    this.init(state, config, props);
  }

  static init(state, config, props) {
    state.content = new Content(config, props);
    state.pages = new Pages(config, props);
    state.sessions = new Sessions(config, props);

    state.globals = new Globals(config, props);
    state.providers = new Providers(config, props);
    state.stores = new Stores(config, props);
    return state;
  }
}
