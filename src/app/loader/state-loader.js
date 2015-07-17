import BaseLoader from './base-loader';
import loaders from './state/loaders';

export default class StateLoader extends BaseLoader {
  // generalize in Loader
  constructor(config) {
    super(config);
    this.loaders = config.loaders || loaders(this);
    this.defaultPaths = config.default.state.loader.paths;
  }

  fileLoader(type) {
    return (name, ext = 'json') => {
      return this.loader.file.load(this.resolveDir(type), name, ext);
    };
  }

  fromStore(name) {
    return this.loaders.store(name);
  }

  provide(name) {
    return this.loaders.provider(name);
  }
}
