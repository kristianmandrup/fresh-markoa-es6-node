export default {
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
