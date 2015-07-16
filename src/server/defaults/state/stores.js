'use strict';

import DataConfigurator from './data-configurator';
// Data sources available
export default class Stores extends DataConfigurator {
  get data() {
    return {
      global: {
        menus: {
          sportsMenu: this.retriever('sports-menu')
        }
      },
      coupons: {
        popularGames: this.retriever('popular-games'),
        topTenGames: this.retriever('top-10-games')
      }
    };
  }

  get retriever() {
    return this.config.utils.retriever;
  }
}
