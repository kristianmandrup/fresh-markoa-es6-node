'use strict';

import BaseMw from './base-mw';
import serveStatic from 'koa-static';

export default class StaticMw extends BaseMw {
  constructor(config) {
    super(config);
  }

  get statics() {
    return this.config.statics;
  }

  mount(config) {
    this.app.use(serveStatic(this.statics.rootPath));
    return this;
  }
}
