'use strict';

import TokenRetriever from './token-retreiver';

export decodeToken = function(req, res, next) {
  var jwt = require('jwt-simple');
  var tokenRetriever = new TokenRetriever(req);
  var token = tokenRetriever.retrieveToken();

  if (token) {
    try {
      var decoded = jwt.decode(token, app.get('jwtTokenSecret'));
      // handle token here
      return decoded;

    } catch (err) {
      // TODO: user server.logger.log
      console.log('Decode Token Error', err);
    }
  }
  return next();
};
