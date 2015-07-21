import Configurator from '../../server/configurator';
import Data from './data';

export default class State extends Configurator {
  constructor(config, data = {}) {
    super(config);
    this.data = new Data(config. data)
  }

  merge(data) {
    Object.assign(this.data, data);
  }

  mount(data, name) {
    if (typeof name !== 'string') {
      throw `Must mount data Object on named key, was: ${name}`;
    }
    Object.assign(this.data[name], data)
  }
}
