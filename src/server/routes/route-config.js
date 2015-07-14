'use strict';

export default class RouteConfig {
  constructor(config) {
    super(config);
  }

  get routeBuilder() {
    return server.routes.routeBuilder(this.config);
  }

  // returns factory function which can
  // create marko routes using data dictionary for async fragments
  // build all routes
  buildAll(server, options = {}) {
    // create an index route
    routeBuilder.buildRoute('index', '/');

    // create routes for each page
    for (let page of server.views.pages.active)
      routeBuilder.buildRoute(page);

    return server;
  }
}
