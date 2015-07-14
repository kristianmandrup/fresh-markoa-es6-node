'use strict';

import router from 'koa-router';

export default class RouterMw {
  constructor(config) {
    super(config);
  }

  mount(config) {
    this.app.use(router(this.app));
    return this;
  }
};