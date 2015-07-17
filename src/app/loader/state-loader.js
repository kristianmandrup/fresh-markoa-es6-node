import Loader from '../loader';

export default class StateLoader extends BaseLoader {
  // generalize in Loader
  constructor(config) {
    super(config);
  }

  fileLoader(type) {
    return (name, ext = 'json') => {
      return this.loader.file.load(this.resolveDir(type), name, ext);
    };
  }

  get defaultPaths() {
    return {
      fixture: 'test/fixtures',
      config: 'config'
    };
  }

  get loaders() {
    return {
      fixture: this.fileLoader('fixtures'),
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

