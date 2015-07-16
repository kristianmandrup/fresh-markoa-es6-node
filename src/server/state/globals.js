'use strict';

import DataConfigurator from './data-configurator';

export default class Globals extends DataConfigurator {
  get fixture() {
    return this.config.loader.fixture;
  }

  get data() {
    return {
      title: 'FORVETBET',
      logo: '../img/forvetbet-logo.png',

      // load from fixture files :)
      menu: {
        topItems: this.fixture('menus/top-menu'),
        bottomItems: this.fixture('menus/bottom-menu')
      },

      // see fixtures/account.json
      // this should NOT be global!
      account: {
        deposit: this.fixture('account/deposit')
      }
    };
  }
}
