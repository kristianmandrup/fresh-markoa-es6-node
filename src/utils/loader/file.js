'use strict';

var filepath = require('path'),
    yaml = require('js-yaml'),
    fs = require('fs');

export default {
  nameFor: function(name, ext) {
    return `${name}.${ext}`;
  },
  pathFor: function(folder, name, ext) {
    return filepath.join(folder, this.nameFor(name, ext));
  },
  load: function(folder, name, ext){
    switch (ext) {
      case 'yml':
        return this.loadYaml(folder, name);
      default:
        return require(this.pathFor(folder, name, ext));
    }
  },
  loadYaml: function(folder, name){
    try {
      return yaml.safeLoad(fs.readFileSync(this.path(folder, name, '.yml'), 'utf8'));
    } catch (e) {
      throw e;
    }
  }
};