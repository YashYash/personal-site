app.controller('ContactDesktopController', [
  '$scope',
  function(
    $scope) {
    'use strict';
    console.log('#### Contact Desktop Controller');

    // init
    $scope.clearSquares = [];
    for (var i = 0; i < 100; i++) {
      var square = {
        left: Math.floor((Math.random() * 1200) + 1),
        top: Math.floor((Math.random() * 700) + 1),
      }
      $scope.clearSquares.push(square);
    }
    console.log($scope.clearSquares);
  }
]);
