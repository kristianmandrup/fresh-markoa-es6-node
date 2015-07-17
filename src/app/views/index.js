'use strict';

import PathResolver from './path-resolver';
import views from './views-config';

// TODO: Refactor to use Application View loader
export default class Views {
  constructor(config) {
    this.config = config;
  }

  configure() {
    this.activatePages();
    this.createPageTemplateFinder();
    return this;
  }

  // by default activate all available
  // TODO: allow override to customize this!
  activatePages() {
    this.pages.active = this.pages.available;
  }

  get assetTypes() {
    return ['statics', 'pages'];
  }

  // allow override
  // TODO: should by default be more intelligent
  // using config infrastructure of mounted pages
  createPageTemplateFinder() {
    this.pages.findTemplate = (template) => {
      return this.pages[template];
    };
  }

  get views() {
    return this.config.views;
  }

  get pages() {
    return this.views.pages;
  }
}
