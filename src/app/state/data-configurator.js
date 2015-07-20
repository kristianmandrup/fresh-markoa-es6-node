import Configurator from '../../server/configurator';

export default class DataConfigurator extends Configurator {
  constructor(config, props = {}) {
    super(config);
    this.data = this.createDefaultData(props);
  }

  // Allowing props to be a name
  // TODO: Refactor and cleanup, use extra utility method to branch off
  createDefaultData(props) {
    try {
      let name = props;
      let data;
      if (typeof props === 'object') {
        data = props.data || props;
        name = props.name;
      }
      return data || this.defaultData[props.name] || this.defaultData;
    } catch (e) {
      return {};
    }
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
