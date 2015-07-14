'use strict';

import serveStatic from 'koa-static';

export default class StaticMw {
  constructor(config) {
    super(config);
  }

  mount(config) {
    this.app.use(serveStatic(this.config.static.rootPath));
    return this;
  }
}
