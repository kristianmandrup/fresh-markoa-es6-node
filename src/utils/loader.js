'use strict';

var utils = require('./index');

var dirs = {
  fixture: 'test/fixtures',
  config: 'lib/server/config'
};

function loader(type){
   return function(name, ext = 'json') {
     return utils.file.load(dirs[type], name, ext);
   };
}

// Loads a given resource
export default {
  retriever: utils.retriever,
  fixture: loader('fixture'),
  config: loader('config'),
  // load JSON from REST endpoint via HTTP GET (Ajax)
  rest: {
    block: utils.ajax('block') // from CMS
  }
};
