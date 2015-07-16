'use strict';

import PathResolver from '../../../src/server/views/path-resolver';

describe('PathResolver', function() {
  it('exists', () => {
    expect(PathResolver).to.not.be.undefined;
  });

  describe('instance', function() {
    var resolver = new PathResolver({});
    var conf = {statics: {
      rootPath: 'assets'}
    };

    describe('#rootResolver', function() {
      it('has a config object', () => {
        expect(resolver.rootResolver(conf, 'statics')).to.eql('x');
      });
    });
  });
});
