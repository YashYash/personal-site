var app = angular.module('app', ['ionic', 'ngStorage', 'ngSanitize', 'ngLoad']);
'use strict';

console.log('#### APP JS LOADED: app');
app.run(['$rootScope', function($rootScope) {
	console.log('#### App.js .run');
}]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  console.log('#### State provider working');
  $urlRouterProvider.otherwise('/');
  $stateProvider

	.state('app', {
		url: '/',
		views: {
			'global': {
				templateUrl: '/views/global.html',
				controller: 'GlobalController'
			}
		}
	})
	.state('app.v1', {
	  url: 'tab',
	  abstract: true,
	  views: {
	    'global@': {
	      templateUrl: '/views/v1/v1.html',
	      controller: 'RootController'
	    },
	    'nav@app.v1': {
	      templateUrl: '/views/v1/nav.html',
	      controller: 'NavController'
	    },
	    'content@app.v1': {
	      templateUrl: '/views/v1/content.html',
	      controller: 'ContentController'
	    }         
	  }
    })
    .state('app.v1.landing-desktop', {
      url: '/landing/:goTo',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/desktop/landing.html',
          controller: 'LandingDesktopController'
        }
      }
    })
    .state('app.v1.work-desktop', {
      url: '/work',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/desktop/work.html',
          controller: 'WorkDesktopController'
        }
      }
    })  
    .state('app.v1.about-desktop', {
      url: '/about',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/desktop/about.html',
          controller: 'AboutDesktopController'
        }
      }
    })
    .state('app.v1.entertainment-desktop', {
      url: '/entertainment',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/desktop/entertainment.html',
          controller: 'EntertainmentDesktopController'
        }
      }
    }) 
    .state('app.v1.contact-desktop', {
      url: '/entertainment',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/desktop/contact.html',
          controller: 'ContactDesktopController'
        }
      }
    })                
    .state('app.v1.landing-mobile', {
      url: '/landing-mobile',
      views: {
        'landing@app.v1': {
          templateUrl: '/views/v1/mobile/landing-mobile.html',
          controller: 'LandingController'
        }
      }
    })
    .state('app.v1.work-mobile', {
      url: '/work-mobile',
      views: {
        'work@app.v1': {
          templateUrl: '/views/v1/mobile/work-mobile.html',
          controller: 'WorkController'
        }
      }
    })
    .state('app.v1.entertainment-mobile', {
      url: '/entertainment-mobile',
      views: {
        'entertainment@app.v1': {
          templateUrl: '/views/v1/mobile/entertainment-mobile.html',
          controller: 'EntertainmentController'
        }
      }
    })                      
}]);

app.constant('moment', moment);
app.filter('moment', function() {
  return function(dateString, format, calendar) {
    if (format === 'calendar') {
      return moment(dateString).calendar();
    } else {
      return moment(dateString).format(format);
    }
  };
});



