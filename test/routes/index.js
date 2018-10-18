'use strict';
const app = require('../start-server');

if (!global.Promise) {
  console.log('No support for promises, using external from q');
  global.Promise = require('q');
}

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
var server = null;

describe('Test API Routes for UserProfile service', () => {
  before((done) => {
    app().start().then((s) => {
      server = s;
      done();
    });
  });
  after(() => {
    console.log('stop the server');
    return app().stop();
  });

  it('should get a dummy UserProfile', () => {
    return chai.request(server)
      .get('/api/UserProfiles/2')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        var usrprofile = JSON.parse(res.text);
        console.log('response text is:' + JSON.stringify(usrprofile));
        expect(usrprofile).to.be.an('object');
      }).catch((err) => {
        console.log('error in userProfiles get');
        throw err;
      });
  });
});
