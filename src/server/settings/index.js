'use strict';

import Configurator from '../configurator';
import path from 'path';
import defaults from './defaults';

export default class Settings extends Configurator {
  constructor(config, options = {}) {
    super(config);
    this.options = options;
  }

  get rootPath() {
    return this.options.rootPath || this.myRoot;
  }

  get myRoot() {
    return path.resolve(path.join(__dirname, '../../../'));
  }

  configure(settings) {
    this.props = settings || defaults;
    this.props.rootPath = this.props.rootPath || this.rootPath;
    return this;
  }
}
