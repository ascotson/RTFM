angular.module('rtfmApp', ['ui.router','firebase'])

  .constant('firebase', {
    url: 'https://devmtn-rtfm-proj.firebaseio.com/'
  })

  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('threads',{
        url: '/threads',
        templateUrl: 'js/threads/threadsTmpl.html',
        controller: 'threadsCtrl',
        resolve: {
          threadsRef:  function(threadService){
            return threadService.getThreads();
          }
        }
      })

      .state('thread', {
        url: '/threads/:threadId',
        templateUrl: 'js/thread/threadTmpl.html',
        controller: 'threadCtrl',
        resolve: {
          threadRef:  function(threadService, $stateParams){
            return threadService.getThread($stateParams.threadId);
          },
          commentsRef: function(threadService, $stateParams){
            return threadService.getComments($stateParams.threadId);
          }
        }
      });

      $urlRouterProvider
        .otherwise('/threads');
  });
