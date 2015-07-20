import {buildDecorator, storeDecorator, providerDecorator} from '../../../../../src/app/state/decorator/decorators';

describe('#buildDecorator', () => {
  it('exists', () => {
    expect(buildDecorator).to.not.be.undefined;
  });
});

describe('#storeDecorator', () => {
  it('exists', () => {
    expect(storeDecorator).to.not.be.undefined;
  });
});

describe('#providerDecorator', () => {
  it('exists', () => {
    expect(providerDecorator).to.not.be.undefined;
  });
});
