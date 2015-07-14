export class Executer {
  constructor(server) {
    this.server = server;
  }

  log(msg) {
    this.server.logger.log(msg);
  }

  start(options = {}) {
    this.log('start server:', options);

    var port = options.port || server.port;

    server.app.listen(port, function() {
      this.log(`Koa appplication listens on port ${port}`);
      if (process.send) {
        process.send('online');
      }
    });
  }

  stop() {
    this.log('stopping server');
    // TODO: there is a better way to gracefully shut down!
    // https://github.com/koajs/koa/issues/328
  }

  kill() {
    this.log('kill server!!');
    throw 'Killed server';
  }
}