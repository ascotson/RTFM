angular.module('rtfmApp')
  .controller('threadCtrl', function($scope, $firebaseObject, $firebaseArray, threadRef, commentsRef){

    $scope.thread = $firebaseObject(threadRef);
    $scope.thread.$bindTo($scope, 'thread');

    $scope.comments = $firebaseArray(commentsRef);

    $scope.createComment = function(username, text){
      $scope.comments.$add({
        username: username,
        text: text
      });
    };

  });
