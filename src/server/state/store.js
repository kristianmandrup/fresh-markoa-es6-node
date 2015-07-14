'use strict';

let retriever = require('../../utils').retriever;

// Data sources available
// store
module.exports = {
  global: {
    menus: {
      sportsMenu: retriever('sports-menu')
    }
  },
  coupons: {
    popularGames: retriever('popular-games'),
    topTenGames: retriever('top-10-games')
  }
};
