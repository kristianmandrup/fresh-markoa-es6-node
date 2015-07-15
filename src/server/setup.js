'use strict';

import Configurator from './configurator';
import koa from 'koa';
var defaults;
// import defaults from './defaults';
// import middleware from './middleware';

// Usage new Setup(server, {})
export default class Setup extends Configurator {
  constructor(config) {
    super(config);
    // load server default configs
    this.config.defaults = defaults;
  }

  // app configuration
  configureApp() {
    this.app = koa();
    // mount all middleware
    this.config.middleware.mountAll(this.config);
    return this;
  }
}
