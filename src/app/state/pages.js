'use strict';

import DataConfigurator from './data-configurator';
import defaults from './defaults';

export default class Pages extends DataConfigurator {
  get defaultData() {
    return defaults.globals;
  }
}
