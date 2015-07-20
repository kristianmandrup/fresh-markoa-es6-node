import State from '../../../src/app/state';

describe('State', () => {
  it('exists', () => {
    expect(State).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(State).to.be.a('function');
  });

  describe('empty config', () => {
    it('throws', () => {
      expect(() => {
        var a = new State({});
        a;
      }).to.throw;
    });
  });

  describe('content configuration', () => {
    let content = {
      x: 2
    };
    let contentConf = {
      content: content
    };

    it('does NOT throw', () => {
      expect(() => new State(contentConf)).to.not.throw;
    });

    it('sets content data', () => {
      let state = new State(contentConf);
      expect(state.content.data).to.eql(content);
    });
  });
});
