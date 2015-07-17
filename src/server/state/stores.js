'use strict';

import DataConfigurator from './data-configurator';
return defaults from './defaults';

// Data sources available
export default class Stores extends DataConfigurator {
  get defaultData() {
    return defaults.stores;
  }

  // TODO: use store decorator!
  configure() {
    // iterate keys and decorate
  }
}
