'use strict';

import PathResolver from './path-resolver';

export default class Views {
  constructor(config) {
    this.config = config;
    this.pathResolver = new PathResolver();
  }

    // configure rootPath for views using server root path
  resolveViewsRootPath() {
    this.views.rootPath = this.pathResolver.resolvePath(this.rootPath, this.views.root);
  }

  get resolveRoot() {
    return this.pathResolver.rootResolver(this.views, this.views.rootPath);
  }

  get rootPath() {
    return this.config.rootPath;
  }

  get views() {
    return this.config.views;
  }

  get pages() {
    return this.views.pages;
  }

  // by default activate all available
  // TODO: allow override to customize this!
  activatePages() {
    this.pages.active = this.pages.available;
  }

  get assetTypes() {
    return ['statics', 'pages'];
  }

  // configure rootPath for /statics and /pages folders
  // statics is where static assets live such as:
  // - images, fonts, css etc
  resolveViewRootPaths() {
    for (let name of this.assetTypes) {
      this.resolveRoot(name);
    }
  }

  resolvePageTemplateRootPaths() {
    // dynamically configure path to each page (in views)
    // allows dev to override by mounting a different path
    for (let page of this.pages.active) {
      this.pages[page] = this.resolvePath(this.pages.rootPath, page);
    }
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
