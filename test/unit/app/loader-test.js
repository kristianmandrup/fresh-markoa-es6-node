'use strict';

import Loader from '../../../src/app/loader';

describe('Loader', function() {
  it('exists', () => {
    expect(Loader).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(Loader).to.be.a('function');
  });

  describe('empty config', function() {
    var loader = new Loader({});

    it('has config', () => {
      // throw util.inspect(routes.config);
      expect(loader.config).to.be.a('object');
      expect(loader.config).to.eql({});
    });
  });
});
