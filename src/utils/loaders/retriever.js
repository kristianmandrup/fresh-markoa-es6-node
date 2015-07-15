'use strict';

import delayed from './delayed';
import loaders from './index';

const DELAY = 500;

// Retrieves a resource
// In real app will load JSON via HTTP GET
export default function(resource, delay) {
  delay = delay || DELAY;
  return function() {
    var loadData = delayed(loaders.file(resource), delay);
    return loadData.then(function(data) {
      return data;
    });
  };
}
