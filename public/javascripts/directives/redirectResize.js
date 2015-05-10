app.directive('redirectResize', function($state, $rootScope) {
  'use strict';
  console.log('#### Redirect Resize Directive');
  return {
    restrict: 'E',
    link: function() {
      var redirect;

      redirect = function() {
        $rootScope.$broadcast('resizing window');
        if ($(window).width() > 1024) {
          console.log($state.current.name);
          if ($state.current.name !== 'app.v1.about-desktop' && $state.current.name !== 'app.v1.work-desktop' && $state.current.name !== 'app.v1.contact-desktop') {
            $state.go('app.v1.landing-desktop');
          }
        } else {
          $state.go('app.v1.landing-mobile');
        }
      }
      $(window).on('resize', redirect);
      $(window).on('load', redirect);

      $rootScope.windowSize = function() {
        var size = {
          width: $(window).width(),
          height: $(window).height()
        }
        return size;
      };
      $rootScope.hideExtraElements = function() {
        console.log($('.content-container-desktop'));
        var elementsLength = $('.content-container-desktop').length;
        console.log(elementsLength);
        for(var i = 0; i < elementsLength; i++) {
          var elementIndex = i + 1;
          $('div').remove('.content-container-desktop:nth-of-type(' + elementIndex + ')');
          console.log('#### Removed element');
        }
      };
    }
  }
});
