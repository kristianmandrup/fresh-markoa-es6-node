'use strict';

export default {
  port: 4000,
  secret: 'haTd3Yw9IfSGpM5VfY9srGOd2N92GJ2aT4',
  middlewares: [
    'compression',
    'csrf',
    'jwt',
    'onerror',
    'router',
    'scss',
    'static'
  ],
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