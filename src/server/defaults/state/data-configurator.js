import Configurator from '../../configurator';

export default class DataConfigurator extends Configurator {
  get current() {
    return this.getFor(this.config.currentPage);
  }

  getFor(name) {
    return this.data[name] || this.data;
  }
}
