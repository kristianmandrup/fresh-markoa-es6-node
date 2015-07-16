'use strict';

import Views from '../../../src/server/views';

describe('Views', function() {
  it('exists', () => {
    expect(Views).to.not.be.undefined;
  });

  describe('empty config', function() {
    var views = new Views({});
    it('has a config object', () => {
      expect(views.config).to.eql({});
    });

    it('can be configured', () => {
      expect(views.configure()).to.eql({});
    });
  });
});
