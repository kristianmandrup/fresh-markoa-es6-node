'use strict';

import BaseMw from './base-mw';
import scss from 'koa-scss';

export default class ScssMw extends BaseMw {
  constructor(config) {
    super(config);
  }

  mount(server) {
    this.app.use(scss({
      src: this.config.stylesheets.scss.srcPath,
      dest: this.config.static.stylesheets.path,
      debug: true,
      force: true
    }));
    return this;
  }
}
