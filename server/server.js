'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var http = require('http');
var https = require('https');

var app = module.exports = loopback();
var server = null;

var httpsOptions = {
};

app.start = function() {
  var port = app.get('port');
  var host = app.get('host');
  var isMain = require.main === module;

  // start the web server
  server = app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
  return server;
  // var httpServer = http.createServer(app).listen(port, host, () => {
  //   if (isMain)
  //     printServerListeningMsg('http', host, port);

  //   var httpsPort = app.get('https-port');
  //   var httpsServer = https.createServer(httpsOptions, app).listen(httpsPort,
  //     host, ()=> {
  //       if (isMain)
  //         printServerListeningMsg('https', host, httpsPort);

  //       app.emit('started');

  //       app.close = function(cb) {
  //         app.removeAllListeners('started');
  //         app.removeAllListeners('loaded');
  //         httpServer.close(() => {
  //           httpsServer.close(cb);
  //         });
  //       };
  //     });
  // });
};

app.stop = function() {
  if (server) {
    app.removeAllListeners('started');
    app.removeAllListeners('loaded');
  }
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    server = app.start();
  }
});
