app.controller('RootController', [
	'$scope',
	'$rootScope',
	'$state',
	'$timeout', 
	function(
		$rootScope,
		$scope, 
		$state,
		$timeout) {
	'use strict';
	console.log('#### Root Controller');
	
	// init
	$timeout(function() {
		$scope.animationOne();
		$scope.$apply();
	}, 3000);

	// Functions called from within
	$scope.animationOne = function() {
		$scope.zoomIn = 'true';
		$timeout(function() {
			$scope.animationTwo();
			$scope.$apply();
		}, 15000);
	};

	$scope.animationTwo = function() {
		$scope.zoomIn = 'false';
		$timeout(function() {
			$scope.animationOne();
			$scope.$apply();
		},15000)		
	};
	
	// UI responders

}]);