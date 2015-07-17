'use strict';

import DataConfigurator from './data-configurator';

// Data sources available
export default class Stores extends DataConfigurator {
  constructor(config, obj) {
    super(config);
    this.data = obj || defaults.stores;
  }
}
