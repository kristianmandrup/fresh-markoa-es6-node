import Content from '../../../../src/app/state/content';

describe('Content', () => {
  it('exists', () => {
    expect(Content).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(Content).to.be.a('function');
  });

  describe('empty config', () => {
    it('throws', () => {
      expect(() => {
        let a = new Content({});
        a;
      }).to.throw;
    });
  });

  describe('content configuration', () => {
    let contentConf = {
      x: 2
    };

    it('does NOT throw', () => {
      expect(() => new Content(contentConf)).to.not.throw;
    });

    it('sets content data', () => {
      let content = new Content(content);
      expect(content.data).to.eql(contentConf);
    });
  });
});
