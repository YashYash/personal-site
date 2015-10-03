app.controller('AboutDesktopController', [
  '$scope',
  '$timeout',
  function(
    $scope,
    $timeout) {
    'use strict';
    console.log('#### About Desktop Controller');

    // init
    $scope.movePlane = function() {
    	$scope.hideElements = false;
    	$scope.movePlaneNow = true;
    	$timeout(function() {
    		$scope.hideElements = true;
    		$timeout(function() {
    			$scope.movePlaneNow = false;
    			$timeout(function() {
    				$scope.movePlane();
    			}, 4000);
    		}, 4000);
    	}, 4400);
    };

    $scope.movePlane();
  }
]);
