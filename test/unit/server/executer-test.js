'use strict';

import Executer from '../../../src/server/executer';

describe('Executer', function() {
  it('exists', () => {
    expect(Executer).to.not.be.undefined;
  });

  describe('empty config', function() {
    var executer = new Executer({});

    it('has config', () => {
      expect(executer.config).to.eql({});
    });
  });
});
