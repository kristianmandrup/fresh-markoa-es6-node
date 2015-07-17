'use strict';

import path from 'path';
import Configurator from './configurator';

export default class Loader extends Configurator {
  constructor(config, options = {}) {
    super(config);
  }

  static createFrom(config, options) {
    if (options) {
      this.rootPath = options.rootPath;
      if (options.state) {
        config.state = new StateLoader(options.state);
      }
      if (options.views) {
        config.views = new ViewsLoader(options.views);
      }
    }
    return config;
  }
}
