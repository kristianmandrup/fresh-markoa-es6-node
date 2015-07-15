'use strict';

import utils from '../../utils';
var fixture = utils.loader.fixture;

export default {
  title: 'FORVETBET',
  logo: '../img/forvetbet-logo.png',

  // load from fixture files :)
  menu: {
    topItems: fixture('menus/top-menu-items'),
    bottomItems: fixture('menus/bottom-menu-items')
  },

  // see fixtures/account.json
  // this should NOT be global!
  account: {
    deposit: fixture('account/deposit')
  }
};
