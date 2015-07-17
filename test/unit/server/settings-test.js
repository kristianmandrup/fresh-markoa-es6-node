'use strict';

import Settings from '../../../src/server/settings';

describe('Settings', function() {
  it('exists', () => {
    expect(Settings).to.not.be.undefined;
  });

  describe('empty config', function() {
    var defaults = new Settings({});

    it('has config', () => {
      expect(defaults.config).to.eql({});
    });
  });
});
