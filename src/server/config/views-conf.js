'use strict';

function resolvePath(root, folder) {
  return path.resolve(path.join(root, folder));
}

function rootResolver(conf, root) {
  return function (name) {
    conf[name].rootPath = resolvePath(root, conf[name].rootPath);
    return conf;
  };
}

// TODO: options = {}
export default function(server) {
  var views = server.views;
  var pages = views.pages;
  pages.active = pages.available;

  // configure rootPath for views using server root path
  views.rootPath = resolvePath(options.root, views.root);

  var resolveRoot = rootResolver(views, views.rootPath);

  // configure rootPath for /static and /pages folders
  for (let name of ['static', 'pages'])
    resolveRoot(name);

  // dynamically configure path to each page (in views)
  // allows dev to override by mounting a different path
  for (let page of pages.active)
    pages[page] = resolvePath(pages.rootPath, page);

  pages.findTemplate = function(template) {
    return pages[template];
  };

  return server;
}