app.controller('NavController', [
  '$scope',
  '$rootScope',
  '$state',
  function(
    $rootScope,
    $scope,
    $state) {
    'use strict';
    console.log('#### Nav Controller');
    $scope.navVisible = false;
    $scope.toggleNav = function() {
    	if($scope.navVisible) {
    		$scope.navVisible = false;
    	} else {
    		$scope.navVisible = true;
    	}
    }
  }
]);
