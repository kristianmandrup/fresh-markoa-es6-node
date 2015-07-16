'use strict';

import Defaults from '../../../src/server/defaults';

describe('Defaults', function() {
  it('exists', () => {
    expect(Defaults).to.not.be.undefined;
  });

  describe('empty config', function() {
    var defaults = new Defaults({});

    it('has config', () => {
      expect(defaults.config).to.eql({});
    });
  });
});
