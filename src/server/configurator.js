export default class Configurator {
  constructor(config) {
    this.config = config;
  }

  get app() {
    this.config.app;
  }

  get logger() {
    return this.config.logger;
  }

  log(msg) {
    this.logger.log(msg);
  }
}
