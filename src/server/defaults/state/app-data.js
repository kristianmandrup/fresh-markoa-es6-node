'use strict';

var state = require('./index');

function pageData(name) {
  return {
    $global: state.global[name],
    session: state.session[name],
    providers: state.providers[name],
    page: state.page[name],
    content: state.content[name]
  };
}

// See koa-server.md *Models and data* section
export default function(server) {
  // auto configure/generate data for all registered pages!
  var data = {};
  for (let page of server.config.pages) {
    data[page] = pageData(page);
  }
  server.state.data = data;
  return server;
}
