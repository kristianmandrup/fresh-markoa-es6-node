'use strict';

// TODO: use options = {}
var defaultRouteBuilder = function(server) {
  return function (name, route) {
    // TODO: use koa-router instead!
    server.app.get(`/${route || name}`, function *(){
      server.render(this, name, server.state.appData[name]);
    });
  };
};

export default {
  // returns factory function which can
  // create marko routes using data dictionary for async fragments
  createBuilder: defaultRouteBuilder,

  // build all routes
  buildAll: function(server, options = {}) {
    var routeBuilder = server.routes.createBuilder || defaultRouteBuilder;
    var buildRoute = routeBuilder(server, options);

    // create an index route
    buildRoute('index', '/');

    // create routes for each page
    for (let page of server.views.pages.active)
      buildRoute(page);

    return server;
  }
};