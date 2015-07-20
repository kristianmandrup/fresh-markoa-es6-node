import PathResolver from '../../../../../src/app/loader/views/path-resolver';

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
        expect(resolver.rootResolver(conf, 'statics')).to.be.a('function');
      });
    });
  });
});
