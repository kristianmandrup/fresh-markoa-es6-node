// TODO
// Improve using either:
// https://github.com/ivpusic/koa-routing
// https://github.com/alexmingoia/koa-router

export default class RouteBuilder {
  constructor(config) {
    super(config);
  }

  appData(name) {
    return this.state.appData[name];
  }

  get state() {
    return this.config.state;
  }

  get app() {
    return this.config.app;
  }

  get render() {
    return this.config.render;
  }

  get renderPageFn() {
    // see RenderConfig.builder()
    // this will magically be the response! (controlled by app.get)
    // response, pageName, pageData
    var ctx = this;
    return function*() {
      this.render(this, ctx.name, ctx.appData(ctx.name));
    }
  }

  get routeName() {
    return `/${route || name}`
  }

  // TODO: use koa-router instead!
  buildRoute(name, route) {
    this.name = name;
    this.route = route;
    this.app.get(this.routeName, this.renderPageFn);
  }
}
