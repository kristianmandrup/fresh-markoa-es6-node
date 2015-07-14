'use strict';

// TODO: cleanup and refactor!

var path = require('path');

var viewsDir = path.join(__dirname, '../views');
console.log(viewsDir);

var refresher = require('marko/browser-refresh');
console.log(refresher);

//refresher.enable();
if (process.env.NODE_ENV !== 'production') {
  // Enable hot reloading in development
  var reloader = require('marko/hot-reload');
  console.log(reloader);
  //reloader.enable();

  require('fs').watch(viewsDir, function(event, filename) {
    if (/\.marko$/.test(filename)) {
      // Resolve the filename to a full template path:
      var templatePath = path.join(viewsDir, filename);

      console.log('Marko template modified: ', templatePath);

      // Pass along the *full* template path to marko
      reloader.handleFileModified(templatePath);
    }
  });
}
