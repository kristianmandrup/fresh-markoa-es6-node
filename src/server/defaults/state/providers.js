'use strict';

var store = require('./store');

// data providers for each page
export default {
  global: {
    sportsmenu: store.sportsmenu
  },
  index: {
    sportsMenu: store.sportsMenu,
    popularGames: store.popularGames
  },
  prematch: {
    sportsMenu: store.sportsMenu,
    popularGames: store.popularGames,
    topTenGames: store.topTenGames
  },
  live: {
  },
  casino: {
  },
  account: {
  }
};

