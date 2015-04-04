app.directive('scrollHeading', [
  function() {
  'use strict';
  console.log('#### Scroll Heading Directive');
  return {
    restrict: 'E',
    scope: {
      scrollPosition: '=',
      data: '=',
      containerId: '=',
      index: '='
    },
    link: function(scope, element, attrs) {
      var GetScrollPosition;
      scope.getCurrentPosition = function() {
        var position = $('#' + scope.index + 'paragraph').position();
        if(position.top < 100) {
          scope.changeHeading(scope.data.title);
        }
      };
    },
    templateUrl: "/views/scrollHeading.html",
    controller: ['$scope', '$rootScope', function($scope, $rootScope) {
      console.log($scope);
     $scope.scrollPosition = $scope.data[0];
     $scope.changeHeading = function() {
        $rootScope.changeHeading($scope.data.title);
     }
     $rootScope.$on('work scrolling', function() {
        $scope.getCurrentPosition();      
     })
    }]
  };
}]);
