'use strict';
var app = require('../server/server');

module.exports = function() {
  return {
    start: () => {
      return new Promise((resolve) => {
        resolve(app.start());
      });
    },
    stop: () => {
      return app.stop();
    },
  };
};
