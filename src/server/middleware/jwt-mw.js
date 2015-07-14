'use strict';

// http://www.sitepoint.com/using-json-web-tokens-node-js/
import jwt from './jwt';

export default class CsrfMw {
  constructor(config) {
    super(config);
  }

  mount() {
    this.app
      .use(jwt.decodeToken)
      .use(jwt.authErrorHandler.unauthorizedAccess);
    return this;
  }
};
