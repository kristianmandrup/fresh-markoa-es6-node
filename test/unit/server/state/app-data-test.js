'use strict';

import AppData from '../../../../src/server/state/app-data';

describe('AppData', function() {
  it('exists', () => {
    expect(AppData).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(AppData).to.be.a('function');
  });

  describe('empty config', function() {
    it('throws', () => {
      expect(() => {
        var a = new AppData({});
        a;
      }).to.throw;
    });
  });

  describe('pages config with string', function() {
    it('throws', () => {
      var badPagesConf = {pages: 'xyz'};
      expect(() => {
        var a = new AppData(badPagesConf);
        a;
      }).to.throw;
    });
  });

  describe('pages config with active list', function() {
    it('does not throw', () => {
      var conf = {pages: {active: ['index']}};
      expect(() => {
        var a = new AppData(conf);
        a;
      }).to.not.throw;
    });
  });
});
