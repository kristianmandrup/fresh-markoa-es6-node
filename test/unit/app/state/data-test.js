import Data from '../../../../src/app/state/data';

describe('Data', () => {
  it('exists', () => {
    expect(Data).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(Data).to.be.a('function');
  });

  describe('empty config', () => {
    it('throws', () => {
      expect(() => {
        let a = new Data({});
        a;
      }).to.throw;
    });
  });

  describe('content configuration', () => {
    let contentConf = {
      x: 2
    };

    it('does NOT throw', () => {
      expect(() => new Data(contentConf)).to.not.throw;
    });

    it('sets content data', () => {
      let content = new Data(content);
      expect(content.data).to.eql(contentConf);
    });
  });
});
