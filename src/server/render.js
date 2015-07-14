'use strict';

function renderBuilder(server) {
  return function(response, pageTemplateName, pageData) {
    var pages = server.views.pages;
    var pageTemplate = pages.findTemplate(pageTemplateName);

    server.logger.log('rendering template, data:', pageTemplate, pageData);

    response.body = server.render.execute(pageTemplate, pageData);
    response.type = 'text/html';
  };
}

// TODO: Move to render conf!?
export default {
  configure: function(server, options) {
    server.render = renderBuilder(server, options);
    return server;
  }
};