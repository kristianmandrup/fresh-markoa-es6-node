export csrfAsserter = function* () {
  var body = yield parse(this); // co-body or something
  try {
    this.assertCSRF(body);
  } catch (err) {
    this.status = 403;
    this.body = {
      message: 'The CSRF token is invalid!'
    };
    return;
  }
};
