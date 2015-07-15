'use strict';

import delayed from './delayed';
import loader from './loader';

const DELAY = 500;

// Retrieves a resource
// In real app will load JSON via HTTP GET
export default function(resource, delay) {
  delay = delay || DELAY;
  return function() {
    let loadData = delayed(loader.file(resource), delay);
    return loadData.then(function(data) {
      console.log(data);
      return data;
    });
  };
}
