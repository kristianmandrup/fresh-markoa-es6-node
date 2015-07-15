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

import views from './views-defaults';
import state from './state';

export default {
  port: 4000,
  secret: 'haTd3Yw9IfSGpM5VfY9srGOd2N92GJ2aT4',
  mounted: {},
  middlewares: {
    available: middlewareList,
    active: middlewareList
  },
  views: views,
  state: state
};
