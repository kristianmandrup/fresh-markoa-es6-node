import Configurator from '../configurator';

// Each page is a separate application potentially
// with its own subset of the Server config namely:
// - custom views config (location of template)
// - custom state

export default class Application extends Configurator {
  constructor(config, name) {
    super(config);
    this.name = name;
    this.views = config.views[name];
    this.state = config.state[name];
  }
}
