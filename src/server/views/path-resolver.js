import path from 'path';
import util from 'util';

export default class PathResolver {
  resolvePath(root, folder) {
    return path.resolve(path.join(root, folder));
  }

  rootResolver(conf, root) {
    return (name) => {
      var obj = conf[name];
      if (!obj) {
        throw `No key ${name} in Object ${util.inspect(conf)}`;
      }
      if (!obj.rootPath) {
        throw `missing .rootPath in ${util.inspect(obj)}`;
      }
      conf[name].rootPath = this.resolvePath(root, obj.rootPath);
    };
  }
}
