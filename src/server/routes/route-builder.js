// TODO
// Improve using either:
// https://github.com/ivpusic/koa-routing
// https://github.com/alexmingoia/koa-router

import Configurator from '../configurator';

export default class RouteBuilder extends Configurator {
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
      yield this.render(this, ctx.name, ctx.appData(ctx.name));
    };
  }

  get routeName() {
    return this.route || this.name;
  }

  get routePath() {
    return `/${this.routeName}`;
  }

  // TODO: use koa-router instead!
  buildRoute(name, route) {
    this.name = name;
    this.route = route;
    this.app.get(this.routePath, this.renderPageFn);
  }
}
