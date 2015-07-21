import File from '../../../src/utils/loaders/file.js';
import mock from 'mock-fs';

describe('File util test: ', function() {
  it('#nameFor', () => {
    let file = new File('Example', 'test');
    let fileName = file.nameFor();
    expect(fileName).to.equal('Example.test');
  });

  it('#pathFor', () => {
    let file = new File('Example', 'test', 'test/folder');
    let path = file.pathFor();
    expect(path).to.equal('test/folder/Example.test');
  });

  it('#constructor - no string folder', () => {
    try {
      let file = new File('Example', 'test', {});
      file.nameFor();
      expect.to.equal(true, false, 'Exception expected');
    }
    catch (e) {
      expect(e.message).to.equal('Folder must be a String');
    }
  });

  it('#pathFor - no string file name', () => {
    try {
      let file = new File({}, 'test', 'test/folder');
      file.nameFor();
      expect(true).to.equal(false, 'Exception expected');
    }
    catch (e) {
      expect(e.message).to.equal('File name must be a String');
    }
  });

  it('#pathFor - no string file name', () => {
    try {
      let file = new File('Example', {}, 'test/folder');
      file.nameFor();
      expect(true).to.equal(false, 'Exception expected');
    }
    catch (e) {
      expect(e.message).to.equal('File ext must be a String');
    }
  });

  it('#load -loading yml file', () => {
    mock({
      'path/to/fake/dir': {
        'some-file.yml': '{action: "testing", method: "load file util"}'
      }
    });
  });
});
