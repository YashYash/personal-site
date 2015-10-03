app.controller('EntertainmentController', [
	'$scope', 
	'$state',
	'$rootScope',
	function(
		$scope,
		$state,
		$rootScope) {
	'use strict';
	console.log('#### Entertainment Controller');
	$scope.toLanding = function() {
		$state.go('app.v1.landing-mobile');
	};
	$scope.data = [
		{
			name: 'Yash',
			age: 20
		},{
			name: 'Joe',
			age: 20
		},{
			name: 'Karl',
			age: 20
		},{
			name: 'Mark',
			age: 20
		},{
			name: 'Jody',
			age: 20
		},{
			name: 'Chris',
			age: 20
		},{
			name: 'Christian',
			age: 20
		},{
			name: 'Joseph',
			age: 20
		},{
			name: 'Michael',
			age: 20
		},{
			name: 'Brad',
			age: 20
		},{
			name: 'Bosh',
			age: 20
		},{
			name: 'LaRon',
			age: 20
		},{
			name: 'Christina',
			age: 20
		}
	]	
}]);