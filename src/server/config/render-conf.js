'use strict';

var renderStrategies = {
  streamed: function(template, data) {
    marko.load(template).stream(data);
  }
};

export default {
  // , options = {}
  configure: function(server) {
    server.render.strategies = renderStrategies;
    server.render.execute = renderStrategies.streamed;
    return server;
  }
};