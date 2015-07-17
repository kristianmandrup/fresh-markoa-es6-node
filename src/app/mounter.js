import Configurator from '../configurator';

export default class Mounter extends Configurator {
  mount(application, name) {
    this.config.mounted[name] = application;
    return this;
  }

  unmount(name) {
    delete this.config.mounted[name];
    return this;
  }
}

