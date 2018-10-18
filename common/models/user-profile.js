'use strict';

module.exports = function(Userprofile) {
  Userprofile.getProfile = async function(id) {
    console.log('id is:' + id);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          'FirstName': 'Glenn',
          'LastName': 'Beck',
          'email': 'gb@email.com',
          'userId': id,
        }, 2000);
      });
    });
  };

  Userprofile.remoteMethod('getProfile', {
    accepts: {arg: 'id', type: 'string'},
    returns: {arg: 'profile', type: 'User', root: true},
    http: {verb: 'get', path: '/:id'},
  });

    //   Userprofile.status = function(cb) {
    //     var response = 'Testing a user id as 1 always';
    //     cb(null, response);
    //   };
    //   Userprofile.getName = function(userId, cb) {
    //     var response = 'Testing a user id as ' + userId + ' always';
    //     cb(null, response);
    //   };
    // //   Userprofile.getProfile = function(id, cb) {
    // //     var response = {
    // //       'FirstName': 'Glenn',
    // //       'LastName': 'Beck',
    // //       'email': 'gb@email.com',
    // //     };
    // //     cb(null, response);
    // //   };
    //   Userprofile.userDetails = function(id, cb) {
    //     var response = {
    //       'FirstName': 'Glenn',
    //       'LastName': 'Beck',
    //       'email': 'gb@email.com',
    //       'id': id,
    //     };
    //     cb(null, response);
    //   };

    //   Userprofile.remoteMethod(
    //     'userDetails',
    //     {
    //       description: 'Get the user details by id',
    //       accepts: [
    //         {arg: 'id',
    //           type: 'number',
    //           required: true,
    //           http: {source: 'path'},
    //           description: 'Userprofile id'},
    //       ],
    //       http: {verb: 'get', path: '/:fk'},
    //       isStatic: false,
    //       returns: {arg: 'result', type: 'UserProfile'},
    //     },
    // 'getProfile',
    // {
    //   http: {path: '/{id}', verb: 'get'},
    //   accepts: {http: {source: 'query'}},
    //   returns: {arg: 'profile', type: 'UserProfile'},
    // },
    //     'getName',
    //     {
    //       http: {path: '/getProfile', verb: 'get'},
    //       accepts: {arg: 'userId', type: 'string', http: {source: 'query'}},
    //       returns: {arg: 'name', type: 'string'},
    //     },
    //     'status', {
    //       http: {path: '/status', verb: 'get'},
    //       returns: {arg: 'status', type: 'string'},
    //     }
    // );
    // Get a users profile based on the user id.
    // Userprofile.getProfile = function(userId, cb) {
    //   console.log('inside Userprofile.getProfile: ' + userId);
    //   var response = {
    //     'FirstName': 'Glenn',
    //     'LastName': 'Beck',
    //     'email': 'gb@email.com',
    //     'id': userId,
    //   };
    //   cb(null, response);
    // };

    // Implementation of the CRUD verbs
    // Userprofile.remoteMethod(
    //   'getProfile',
    //   {
    //     http: {query: '/:userId', verb: 'get'},
    //     accepts: {type: 'number', http: {source: 'query'}},
    //     returns: {arg: 'profile', type: {}},
    //   }
    // );
};
