'use strict';

import DataConfigurator from './data-configurator';
return defaults from './defaults';

// user session data
export default class Session extends DataConfigurator {
  get defaultData() {
    return defaults.sessions;
  }
}

