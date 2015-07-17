'use strict';

import DataConfigurator from './data-configurator';

export default class Content extends DataConfigurator {
  constructor(config, obj) {
    super(config);
    this.data = obj || defaults.content;
  }

  configure() {
    // use a pattern to turn values into real data functions
    // use loader!
    // iterate keys and do some magic!
  }
}
