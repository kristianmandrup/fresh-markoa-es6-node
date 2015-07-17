'use strict';

import DataConfigurator from './data-configurator';

export default class Pages extends DataConfigurator {
  constructor(config, obj) {
    super(config);
    this.data = obj || defaults.pages;
  }
}
