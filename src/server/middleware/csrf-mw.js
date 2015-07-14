'use strict';

import csrf from 'koa-csrf';
import session from 'koa-session';

import {csrfInjector, csrfAsserter} from './csrf/';

// https://github.com/koajs/csrf
export default class CsrfMw {
  constructor(config) {
    super(config);
  }

  mount() {
    this.validate();
    app.keys = [server.secrets.csrf];
    this.use(session());
    csrf(app);
    app
      .use(csrf.middleware)
      .use(csrfInjector)
      .use(csrfAsserter);
    return this;
  }

  validate() {
    if (!this.config.secrets) {
      throw "Missing secrets on server config"
    }
    if (!this.config.secrets.csrf) {
      throw "Missing csrf secrets on server config"
    }
  }
}
