var pagesList = [
  'index',
  'prematch',
  'live',
  'casino',
  'account'
];

export default {
  paths: {
    root: 'views',
    assets: {
      // used to build rootPath
      root: 'public'
    },
    pages: {
      root: 'pages',
      available: pagesList,
      active: ['index', 'casino']
    }
  }
};
