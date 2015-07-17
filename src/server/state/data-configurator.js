import Configurator from '../configurator';
import defaults from './defaults';

export default class DataConfigurator extends Configurator {
  constructor(config) {
    super(config);
    this.defaults = defaults;
  }

  get current() {
    return this.getFor(this.current.page);
  }

  get retriever() {
    return this.utils.retriever;
  }

  get utils() {
    return this.config.utils;
  }

  // try to load by page name otherwise assume data is for that page
  getFor(name) {
    return this.data[name] || this.data;
  }

  get loader() {
    return this.current.loader;
  }

  get current() {
    return this.config.current;
  }
}
