app.controller('LandingController', [
	'$scope', 
	'$state',
	'$rootScope',
	'$timeout',
	'$ionicSlideBoxDelegate',
	'$ionicScrollDelegate',
	function(
		$scope,
		$state,
		$rootScope,
		$timeout,
		$ionicSlideBoxDelegate,
		$ionicScrollDelegate) {
	'use strict';
	console.log('#### Landing Controller');

	// init
	$scope.currNumber = '0';
	$scope.slides = [
		{
			number:'1',
			path: '/views/v1/contact-slide.html'
		},{
			number:'0',
			path: '/views/v1/landing-slide.html'		
		},{
			number:'1',
			path: '/views/v1/about-me-1.html'		
		}
	];	
	$timeout(function() {
		$ionicSlideBoxDelegate.slide(1, 0);
		$ionicScrollDelegate.$getByHandle('landingScroll').scrollTop();
	}, 100);
	
	// Functions called from within
	$scope.activateIconsAnimation = function() {
		$timeout(function() {
			$scope.activatedIcon = 'one';
			$scope.$apply();
		}, 5000);
		$timeout(function() {
			$scope.activatedIcon = 'two';
			$scope.$apply();
		}, 10000);
		$timeout(function() {
			$scope.activatedIcon = 'three';
			$scope.$apply();
		}, 15000);
		$timeout(function() {
			$scope.activatedIcon = 'four';
			$scope.$apply();
			$scope.activateIconsAnimation();
		}, 20000);						
	};
	$scope.activateIconsAnimation();

	// UI responders
	$scope.toWork = function(){
		console.log('#### Going to work experience');
		$state.go('app.v1.work-mobile');
	};

	$scope.toEntertainment = function(){
		console.log('#### Going to work Entertainment');
		$state.go('app.v1.entertainment-mobile');
	};
	$scope.slideHasChanged = function(index) {
		$scope.currNumber = $scope.slides[index].number;
		$ionicScrollDelegate.$getByHandle('landingScroll').scrollTop();
	};
}]);