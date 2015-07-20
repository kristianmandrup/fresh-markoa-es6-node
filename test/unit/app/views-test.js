import Views from '../../../src/app/views';

describe('Views', () => {
  it('exists', () => {
    expect(Views).to.not.be.undefined;
  });

  describe('constructor', () => {
    describe('empty config', () => {
      it('throws', () => {
        expect(() => new Views({})).to.throw;
      });
    });

    describe('has config', () => {
      describe('#pages', () => {
        let pages = {
          available: ['casino', 'index'],
          active: ['index']
        };
        // TODO: can we make this better?
        let config = {
          views: {
            pages: pages
          }
        };

        it('does NOT throw', () => {
          expect(() => new Views(config)).to.not.throw;
        });

        describe('config with pages', () => {
          let views = new Views(config);

          it('has pages', () => {
            expect(views.pages).to.eql(pages);
          });
        });
      });
    });
  });
});
