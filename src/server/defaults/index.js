'use strict';

import Configurator from '../configurator';
import views from './views';
import path from 'path';

export default class Defaults extends Configurator {
  constructor(config, options = {}) {
    super(config);
    this.options = options;
  }

  configure() {
    this.config.views = this.settings.views;
    return this;
  }

  get middlewareList() {
    return [
      'compression',
      'csrf',
      'jwt',
      'onerror',
      'router',
      'scss',
      'static'
    ];
  }

  get rootPath() {
    return this.options.rootPath || this.myRoot;
  }

  get myRoot() {
    return path.resolve(path.join(__dirname, '../../../'));
  }

  get settings() {
    return {
      port: 4000,
      secret: 'haTd3Yw9IfSGpM5VfY9srGOd2N92GJ2aT4',
      mounted: {},
      rootPath: this.rootPath,
      middlewares: {
        available: this.middlewareList,
        active: this.middlewareList
      },
      views: views
    };
  }
}
