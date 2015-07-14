'use strict';

export default class BaseMw {
  constructor(config) {
    this.config = config;
  }

  log(msg) {
    this.logger.log(msg);
  }

  get app() {
    this.config.app;
  }

  get use() {
    this.app.use;
  }

  mount() {
    // do your mounting
    return this;
  }

  unmount(...names) {
    for (let name in names)
      delete this.config[name]
    return this;
  }

  get logger() {
    this.config.logger;
  }
}
