'use strict';

import path from 'path';
import loaders from '../utils/loaders';
import Configurator from './configurator';

// Loads a given resource
// TODO: convert to class?
export default class Loader extends Configurator {

  get dirs() {
    return {
      fixture: 'test/fixtures',
      config: 'config'
    };
  }

  get current() {
    return this.config.current;
  }

  // TODO: should be according to current context (ie. current page)
  resolveDir(type) {
    return path.join(this.config.current.rootPath, this.dirs[type]);
  }

  fileLoader(type) {
    return (name, ext = 'json') => {
      return loaders.file.load(this.resolveDir(type), name, ext);
    };
  }

  get loaders() {
    return {
      fixture: this.fileLoader('fixture'),
      config: this.fileLoader('config'),
      // load JSON from REST endpoint via HTTP GET (Ajax)
      rest: {
        // from CMS
        block: loaders.ajax.get('block'),
        page: loaders.ajax.get('page'),
        article: loaders.ajax.get('article'),
        menu: loaders.ajax.get('menu')
      }
    };
  }
}
