'use strict';

import stores from './stores';
import DataConfigurator from './data-configurator';

export default class Sessions extends DataConfigurator {
// data providers for each page
  get data() {
    return {
      global: {
        sportsmenu: stores.sportsmenu
      },
      index: {
        sportsMenu: stores.sportsMenu,
        popularGames: stores.popularGames
      },
      prematch: {
        sportsMenu: stores.sportsMenu,
        popularGames: stores.popularGames,
        topTenGames: stores.topTenGames
      },
      live: {
      },
      casino: {
      },
      account: {
      }
    };
  }
}
