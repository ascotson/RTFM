angular.module('rtfmApp')
  .service('threadService', function(firebase){

    this.getThreads = function(){
      return new Firebase(firebase.url + '/threads');
    };

    this.getThread = function(threadId){
      return new Firebase(firebase.url + '/threads/' + threadId);
    };

    this.getComments = function(threadId){
      return new Firebase(firebase.url + '/threads/' + threadId + '/comments');
    };

  });
