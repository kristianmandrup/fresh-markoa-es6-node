'use strict';

// See http://www.2ality.com/2014/09/es6-modules-final.html

// loaders
import loader from './loader';
import {loaders} from './loaders';

export default {
  loader: loader,
  loaders: loaders
};
