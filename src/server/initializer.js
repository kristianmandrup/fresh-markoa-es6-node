import Configurator from './configurator';
import Executer from './executer';
import Marko from './marko';
import Middleware from './middleware';
import Render from './render';
import Routes from './routes';
import Views from './views';
import State from './state';
import Loader from './loader';

export default class Initializer extends Configurator {
  constructor(config) {
    super(config);
    this.config.loader = new Loader(config).loaders;
    this.config.state = new State(config);
    this.config.routes = new Routes(config);
    this.config.render = new Render(config);
    this.config.middleware = new Middleware(config);
    this.config.marko = new Marko(config);
    this.config.executer = new Executer(config);
    // TODO: when it works!
    this.config.views = new Views(config);
  }

  init() {
    this.config.views.configure();
    this.config.state.configure();
    return this;
  }
}
