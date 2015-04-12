app.directive('redirectResize', function($state) {
  'use strict';
  console.log('#### Redirect Resize Directive');
  return {
    restrict: 'E',
    link: function() {
    	var redirect;

    	redirect = function() {
    		if($(window).width() > 1024) {
    			$state.go('app.v1.landing-desktop');
    		} else {
    			$state.go('app.v1.landing-mobile');
    		}
    	}

    	$(window).on('resize', redirect);
    	$(window).on('load', redirect);
    }
  }
});
