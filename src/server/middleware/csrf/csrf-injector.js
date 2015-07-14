export csrfInjector = function* () {
  if (this.method === 'GET') {
    this.body = this.csrf;
  } else if (this.method === 'POST') {
    this.status = 204;
  }
};
