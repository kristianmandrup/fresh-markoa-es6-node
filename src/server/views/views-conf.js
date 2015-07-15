'use strict';

function resolvePath(root, folder) {
  return path.resolve(path.join(root, folder));
}

function rootResolver(conf, root) {
  return function(name) {
    conf[name].rootPath = resolvePath(root, conf[name].rootPath);
  };
}

// TODO: options = {}
export default class ViewsConfig {
  constructor(config) {
    this.config = config;
  }

    // configure rootPath for views using server root path
  resolveViewsRootPath() {
    this.views.rootPath = resolvePath(this.config.root, views.root);
  }

  get resolveRoot() {
    return rootResolver(this.views, this.views.rootPath);
  }

  get views() {
    this.views = this.config.views;
  }

  get pages() {
    this.pages = this.views.pages;
  }

  // by default activate all available
  // TODO: allow override to customize this!
  activatePages() {
    this.pages.active = this.pages.available;
  }

  // configure rootPath for /static and /pages folders
  resolveViewRootPaths() {
    for (let name of ['static', 'pages'])
      this.resolveRoot(name);
  }

  resolvePageTemplateRootPaths() {
    // dynamically configure path to each page (in views)
    // allows dev to override by mounting a different path
    for (let page of this.pages.active)
      this.pages[page] = resolvePath(pages.rootPath, page);
  }

  // allow override
  // TODO: should by default be more intelligent
  // using config infrastructure of mounted pages
  createPageTemplateFinder() {
    this.pages.findTemplate = (template) => {
      return this.pages[template];
    };
  }

  configure() {
    activatePages();
    resolveViewRootPaths();
    resolvePageTemplateRootPaths();
    createPageTemplateFinder();
    return this;
  }
}
