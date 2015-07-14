'use strict';

import koa from 'koa';
import defaults from './defaults';
// import middleware from './middleware';

// Usage new Setup(server, {})
module.exports = class Setup {
  constructor(config) {
    this.config = config;

    // load server default configs
    this.config.defaults = defaults;
  }

  log(msg) {
    this.config.logger.log(msg);
  }

  // app configuration
  configureApp() {
    server.app = koa();
    // mount all middleware
    this.config.middleware.mountAll(this.config);
    return this.
  }
};