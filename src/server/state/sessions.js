'use strict';

import DataConfigurator from './data-configurator';

// user session data
export default class Session extends DataConfigurator {
  // TODO: could be defined per page if needed
  get data() {
    return {
      guest: {
        user: {}
      },
      basic: {
        user: {
          name: 'eclevic',
          email: 'eclevic@gmail.com'
        }
      },
      admin: {
        user: {
          name: 'admin',
          email: 'admin@gmail.com'
        }
      }
    };
  }
}

