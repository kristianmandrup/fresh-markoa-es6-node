'use strict';

import State from '../../../src/app/state';

// TODO: Redo!!! deprecated design!
describe('State', function() {
  it('exists', () => {
    expect(State).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(State).to.be.a('function');
  });

  describe('empty config', function() {
    it('throws', () => {
      expect(() => {
        var a = new State({});
        a;
      }).to.throw;
    });
  });

  describe('pages config with string', function() {
    it('throws', () => {
      var badPagesConf = {pages: 'xyz'};
      expect(() => {
        var a = new State(badPagesConf);
        a;
      }).to.throw;
    });
  });

  describe('pages config with active list', function() {
    it('does not throw', () => {
      var conf = {pages: {active: ['index']}};
      expect(() => {
        var a = new State(conf);
        a;
      }).to.not.throw;
    });
  });
});
