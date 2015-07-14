'use strict';

var utils = require('./index'),
    delayed = utils.delayed,
    loader = utils.loader,
    defaultDelay = 500;

// Retrieves a resource
// In real app will load JSON via HTTP GET
export default function(resource, delay) {
  delay = delay || defaultDelay;
  return function() {
    let loadData = delayed(loader.file(resource), delay);
    return loadData.then(function(data) {
      console.log(data);
      return data;
    });
  };
}
