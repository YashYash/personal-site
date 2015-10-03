app.controller('BackgroundController', [
  '$scope',
  '$rootScope',
  '$timeout',
  function(
    $scope,
    $rootScope,
    $timeout) {
    'use strict';
    console.log('#### Background Desktop Controller');

    // init
    $scope.colors = [{
      color: 'rgb(250, 119, 120)'
    }, {
      color: 'rgb(30,131,143)'
    }, {
      color: 'rgb(238,238,238)'
    }];
    $scope.currentSize = false;
    // UI-responders
    $scope.generateDots = function() {
      if ($scope.currentSize && $scope.currentSize > $rootScope.windowSize().width) {
      } else {
        $scope.squares = false;
        var size = $rootScope.windowSize();
        $scope.currentSize = size.width;
        $scope.squares = [];
        for (var i = 0; i < 250; i++) {
          var square = {
            number: i,
            left: Math.floor((Math.random() * size.width) + 1),
            top: Math.floor((Math.random() * size.height) + 1),
            color: $scope.colors[Math.floor((Math.random() * 3))].color,
            shift: false
          };
          $scope.squares.push(square);
        }
      }
    };
    $scope.shiftSquare = function(index) {
      $scope.squares[index].shift = true;
      $timeout(function() {
        $scope.squares[index].shift = false;
      }, 1000);
    };
    // UI-relayers
    $rootScope.$on('resizing window', function(e) {
      e.preventDefault();
      $scope.squares = [];
      $timeout(function() {
        $scope.generateDots();
      }, 1000);
    });

    $timeout(function() {
      $scope.generateDots();
    }, 2000);
  }
]);
