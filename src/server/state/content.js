'use strict';

import DataConfigurator from './data-configurator';
import defaults from './defaults';

export default class Content extends DataConfigurator {
  constructor(config, props) {
    super(config, props);
  }

  get defaultData() {
    return defaults.content;
  }

  configure() {
    // use a pattern to turn values into real data functions
    // use loader!
    // iterate keys and do some magic!
  }
}
