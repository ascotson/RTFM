angular.module('rtfmApp')
  .controller('threadsCtrl', function($scope, $firebaseArray, threadsRef){

    $scope.threads = $firebaseArray(threadsRef);

    $scope.createThread = function(username, title){
      $scope.threads.$add({
        username: username,
        title: title
      });
    };
  });
