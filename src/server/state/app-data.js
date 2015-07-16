'use strict';

import PageDataGenerator from './page-data-generator';
import DataConfigurator from './data-configurator';

// See koa-server.md *Models and data* section
export default class AppData extends DataConfigurator {
  constructor(config) {
    super(config);
    this.pageDataGenerator = new PageDataGenerator(config);
    this.configurePageData();
  }

  get pages() {
    return this.config.pages;
  }

  // make sure pages are configured at this point!
  get activePages() {
    return this.config.pages.active;
  }

  pageData(page) {
    return this.pageDataGenerator.pageData(page);
  }

  configurePageData() {
    // auto configure/generate data for all registered pages!
    for (let page of this.activePages) {
      this.pages[page] = this.pageData(page);
    }
  }
}
