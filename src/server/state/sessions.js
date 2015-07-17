'use strict';

import DataConfigurator from './data-configurator';

// user session data
export default class Session extends DataConfigurator {
  constructor(config, obj) {
    super(config);
    this.data = obj || defaults.sessions;
  }
}

