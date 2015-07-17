import {buildDecorator, storeDecorator, providerDecorator} from '../../../src/app/state/decorator/decorators';

describe('#buildDecorator', function() {
  it('exists', () => {
    expect(buildDecorator).to.not.be.undefined;
  });
});

describe('#storeDecorator', function() {
  it('exists', () => {
    expect(storeDecorator).to.not.be.undefined;
  });
});

describe('#providerDecorator', function() {
  it('exists', () => {
    expect(providerDecorator).to.not.be.undefined;
  });
});
