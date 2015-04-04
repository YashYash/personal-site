app.factory('DataService', [
	'$rootScope',
	'$http',
	function(
	$rootScope,
	$http) {
	'use strict';
	console.log('#### Data Service');

	return {
		WorkSlides: function() {
			var slides = [
				{
					name:'5',
					path: '/views/v1/personal-5.html'		
				},{
					name:'4',
					path: '/views/v1/personal-4.html'		
				},{
					name:'3',
					path: '/views/v1/personal-3.html'		
				},{
					name:'2',
					path: '/views/v1/personal-2.html'		
				},{
					name:'1',
					path: '/views/v1/personal-1.html'		
				},{
					name:'0',
					path: '/views/v1/work-mobile-slide.html'		
				},{
					name:'1',
					path: '/views/v1/professional-1.html'		
				},{
					name:'2',
					path: '/views/v1/professional-2.html'		
				},{
					name:'3',
					path: '/views/v1/professional-3.html'		
				},{
					name:'4',
					path: '/views/v1/professional-4.html'		
				},{
					name:'5',
					path: '/views/v1/professional-5.html'		
				}				
			];
			return slides;
		},
		Professional4: function() {
			var paragraphs = [
				{
					title: 'Introduction',
					paragraph: 'The SpotOn Dashboard is one of our most used products. Every one that has a SpotOn automatically has a dashboard generated for them. On this dashboard, the user can create events, update events, delete events, create categories, add events to categories, delete categories, edit their account information and be able to share their button popup on social media. The dashboard has the following tabs:'
				},{
					title: 'Events',
					paragraph: 'The SpotOn Dashboard is one of our most used products. Every one that has a SpotOn automatically has a dashboard generated for them. On this dashboard, the user can create events, update events, delete events, create categories, add events to categories, delete categories, edit their account information and be able to share their button popup on social media. The dashboard has the following tabs:'
				},{
					title: 'Embed',
					paragraph: 'The SpotOn Dashboard is one of our most used products. Every one that has a SpotOn automatically has a dashboard generated for them. On this dashboard, the user can create events, update events, delete events, create categories, add events to categories, delete categories, edit their account information and be able to share their button popup on social media. The dashboard has the following tabs:'
				},{
					title: 'Button',
					paragraph: 'The SpotOn Dashboard is one of our most used products. Every one that has a SpotOn automatically has a dashboard generated for them. On this dashboard, the user can create events, update events, delete events, create categories, add events to categories, delete categories, edit their account information and be able to share their button popup on social media. The dashboard has the following tabs:'
				}				
			];
			return paragraphs;
		}
	}
}]);