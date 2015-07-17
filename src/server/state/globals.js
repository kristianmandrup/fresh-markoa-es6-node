'use strict';

import DataConfigurator from './data-configurator';

export default class Globals extends DataConfigurator {
  get fixture() {
    return this.loader.fixture;
  }
}
