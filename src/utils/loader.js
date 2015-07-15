'use strict';

import loaders from './loaders';

var dirs = {
  fixture: 'test/fixtures',
  config: 'lib/server/config'
};

function fileLoader(type) {
  return function(name, ext = 'json') {
    return utils.file.load(dirs[type], name, ext);
  };
}

// Loads a given resource
export default {
  fileLoader: fileLoader,
  fixture: fileLoader('fixture'),
  config: fileLoader('config'),
  // load JSON from REST endpoint via HTTP GET (Ajax)
  rest: {
    // from CMS
    block: loaders.ajax('block'),
    page: loaders.ajax('page'),
    article: loaders.ajax('article'),
    menu: loaders.ajax('menu')
  }
};
