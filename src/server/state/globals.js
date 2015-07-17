'use strict';

import DataConfigurator from './data-configurator';
import defaults from './defaults';

export default class Globals extends DataConfigurator {
  get fixture() {
    return this.loader.fixture;
  }

  get defaultData() {
    return defaults.globals;
  }
}
