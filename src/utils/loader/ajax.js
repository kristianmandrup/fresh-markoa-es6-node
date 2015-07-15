'use strict';

export default {
  get: function(resource) {
    return function(path) {
      try {
        // do Ajax call
        return path;
      } catch (e) {
        return {error: 'ajax error', resource: resource};
      }
    };
  }
};
