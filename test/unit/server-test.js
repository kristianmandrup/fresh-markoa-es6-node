/* global Server */
import Server from '../../src/index';

describe('Server', function() {
  'use strict';

  it('exists', () => expect(Server).is.not.undefined );

  context('with no config', () => {
    var server = new Server();
    console.log('config', server.config);

    it('has configuration', () => {
      expect(server.config).to.eql({mounted: {}});
    });

    it('has empty mounted object', () => {
      expect(server.config.mounted).to.eql({});
    });

    it('has mount function', () => {
      expect(server.mount).is.not.undefined;
    });

    describe('#mount', function() {
      it('mounts a single config on mounted', () => {
        var casinoConf = {a: 2};
        server.mount(casinoConf, 'casino');
        expect(server.config.mounted.casino).to.eql(casinoConf);
      });
    });

    describe('#setup', function() {
      it('configures defaults', () => {
        server.setup();
        expect(server.config.defaults).to.not.eql({});
      });
    });
  });
});