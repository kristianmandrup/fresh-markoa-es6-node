'use strict';

import stores from './stores';
return defaults from './defaults';
import DataConfigurator from './data-configurator';

export default class Providers extends DataConfigurator {
  get defaultData() {
    return defaults.providers;
  }

  configure() {
    // iterate keys and decorate
  }
}
