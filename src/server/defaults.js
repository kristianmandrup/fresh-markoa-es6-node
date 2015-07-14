'use strict';

var middlewareList = [
  'compression',
  'csrf',
  'jwt',
  'onerror',
  'router',
  'scss',
  'static'
];

export default {
  port: 4000,
  secret: 'haTd3Yw9IfSGpM5VfY9srGOd2N92GJ2aT4',
  config: config,
  executer: executer,
  render: render,
  routes: routes,
  marko: marko,
  middleware: middleware,
  state: state,
  setup: setup,
  mounted: {},
  middlewares: {
    available: middlewareList,
    active: middlewareList
  },
  views: {
    root: 'views',
    static: {
      root: 'public' // used to build rootPath
    },
    pages: {
      root: 'pages',
      available: [
        'index',
        'prematch',
        'live',
        'casino',
        'account'
      ]
    }
  }
};