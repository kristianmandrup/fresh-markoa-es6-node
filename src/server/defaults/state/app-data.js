'use strict';

import pageData from './page-data';
import DataConfigurator from './data-configurator';

// See koa-server.md *Models and data* section
export default class AppData extends DataConfigurator {

  get data() {
    return this.config.state.data || {};
  }

  set data(data) {
    this.data = data;
  }

  configure() {
    // auto configure/generate data for all registered pages!
    this.data = {};
    for (let page of this.config.pages) {
      this.data[page] = pageData(page);
    }
    return this.data;
  }
}
