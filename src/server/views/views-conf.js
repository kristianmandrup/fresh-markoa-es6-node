'use strict';

import path from 'path';

// TODO: options = {}
export default class ViewsConfig {
  constructor(config) {
    this.config = config;
  }

  resolvePath(root, folder) {
    return path.resolve(path.join(root, folder));
  }

  rootResolver(conf, root) {
    return function(name) {
      conf[name].rootPath = this.resolvePath(root, conf[name].rootPath);
    };
  }

    // configure rootPath for views using server root path
  resolveViewsRootPath() {
    this.views.rootPath = this.resolvePath(this.config.root, this.views.root);
  }

  get resolveRoot() {
    return this.rootResolver(this.views, this.views.rootPath);
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
      this.pages[page] = this.resolvePath(this.pages.rootPath, page);
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
    this.activatePages();
    this.resolveViewRootPaths();
    this.resolvePageTemplateRootPaths();
    this.createPageTemplateFinder();
    return this;
  }
}
