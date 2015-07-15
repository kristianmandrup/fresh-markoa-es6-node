'use strict';

import loaders from './loaders';

var dirs = {
  fixture: 'test/fixtures',
  config: 'lib/server/config'
};

function fileLoader(type) {
  return function(name, ext = 'json') {
    return loaders.file.load(dirs[type], name, ext);
  };
}

// Loads a given resource
// TODO: convert to class?
export default {
  fileLoader: fileLoader,
  fixture: fileLoader('fixture'),
  config: fileLoader('config'),
  // load JSON from REST endpoint via HTTP GET (Ajax)
  rest: {
    // from CMS
    block: loaders.ajax.get('block'),
    page: loaders.ajax.get('page'),
    article: loaders.ajax.get('article'),
    menu: loaders.ajax.get('menu')
  }
};
