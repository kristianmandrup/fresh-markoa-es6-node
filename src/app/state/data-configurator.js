import Configurator from '../../server/configurator';

export default class DataConfigurator extends Configurator {
  constructor(config, props = {}) {
    super(config);
    this.data = props.data || this.defaultData[props.name] || this.defaultData;
  }

  get defaultData() {
    return this.defaults[this.constructor.name];
  }

  // override by subclass
  get defaults() {
    return this.config.defaults.state || {};
  }

  get fixture() {
    return this.loader.fixture;
  }

  get retriever() {
    return this.utils.retriever;
  }

  get utils() {
    return this.config.utils;
  }

  get loader() {
    return this.current.loader;
  }

  get current() {
    return this.config.current;
  }
}
