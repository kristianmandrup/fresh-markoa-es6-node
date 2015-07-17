import Configurator from '../configurator';
import defaults from './defaults';

export default class DataConfigurator extends Configurator {
  constructor(config, props = {}) {
    super(config);
    this.data = props.data || this.defaultData[props.name];
  }

  // override by subclass
  get defaultData() {
    return {};
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
