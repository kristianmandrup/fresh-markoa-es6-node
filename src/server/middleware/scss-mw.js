'use strict';

import scss from 'koa-scss';

export default class ScssMw {
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
};
