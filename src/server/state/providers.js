'use strict';

import stores from './stores';
import DataConfigurator from './data-configurator';

export default class Providers extends DataConfigurator {
  constructor(config, obj) {
    super(config);
    this.data = obj || defaults.providers;
  }

  configure() {
    // use a pattern to turn values into real data functions
    // iterate keys and do some magic!
  }
}
