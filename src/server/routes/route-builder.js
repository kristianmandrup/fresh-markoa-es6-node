export default class RouteBuilder {
  constructor(config) {
    super(config);
  }

  get appData(name) {
    return this.config.state.appData[name];
  }

  get app() {
    return this.config.app;
  }

  get render() {
    return this.config.render;
  }

  // TODO: use koa-router instead!
  buildRoute(name, route) {
    this.app.get(`/${route || name}`, function *(){
      this.render(this, name, this.appData(name));
    };
  }
}
