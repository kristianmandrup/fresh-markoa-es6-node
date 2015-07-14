'use strict';

import compress from 'koa-compress';

export default class CompressionMw {
  constructor(config) {
    super(config);
  }

  mount() {
    this.use(compress({
      flush: require('zlib').Z_SYNC_FLUSH
    }));
    return this;
  }
}
