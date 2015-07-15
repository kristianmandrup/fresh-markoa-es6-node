'use strict';

import path from 'path';
import Configurator from '../configurator';
import reloader from 'marko/hot-reload';
import refresher from 'marko/browser-refresh';

export default MarkoConfig extends Configurator {
  get viewsPath() {
    return this.config.views.rootPath;
  }

  isMarkoTemplate(filename) {
    return /\.marko$/.test(filename);
  }

  //refresher.enable();
  //reloader.enable();
  enableReload() {
  }

  reloadModifiedTemplate(filename) {
    // Resolve the filename to a full template path:
    var templatePath = path.join(this.viewsPath, filename);
    // console.log('Marko template modified: ', templatePath);
    // Pass along the *full* template path to marko
    reloader.handleFileModified(templatePath);
  }

  watchTemplates() {
    enableReload();
    require('fs').watch(this.viewsPath, function(event, filename) {
      if (this.isMarkoTemplate(filename)) {
        this.reloadModifiedTemplate(filename);
      }
    });
  }

  // TODO: cleanup and refactor!
  configure() {
    if (process.env.NODE_ENV !== 'production') {
      watchTemplates();
    }
  }
}
