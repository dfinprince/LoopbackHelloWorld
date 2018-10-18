'use strict';

module.exports = function(app) {
  // Install a `/` route that returns server status
  // var router = app.loopback.Router();
  // router.get('/', app.loopback.status());
  // app.use(router);

  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
};

