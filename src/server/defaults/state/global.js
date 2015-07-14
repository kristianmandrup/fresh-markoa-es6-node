'use strict';

var utils = require('../utils'),
    fixture = utils.loader.fixture;

module.exports = {
  title: 'FORVETBET',
  logo: '../img/forvetbet-logo.png',

  // load from fixture files :)
  menu: {
    topItems: fixture('menus/top-menu-items'),
    bottomItems: fixture('menus/bottom-menu-items')
  },

  // TODO: load from fixture file!!!
  // see fixtures/account.json
  // this should NOT be global!
  account: {
    deposit: fixture('account/deposit')
  }
};
