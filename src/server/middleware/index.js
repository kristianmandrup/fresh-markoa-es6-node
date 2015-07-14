'use strict';

export default class Middleware {
  constructor(config) {
    this.config = config;
  }

  get middlewares() {
    return this.config.middlewares;
  }

  mountAll() {
    var mws = {};
    // use Object.keys ?
    for (mw in this.config.middlewares) {
      middleware = mws[mw] = require(`./${ms}-mw`);
      middleware.mount(server, opts);
    }
    return this;
  }
}
