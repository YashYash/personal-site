app.controller('RootController', [
  '$scope',
  '$rootScope',
  '$state',
  '$timeout',
  '$localStorage',
  function(
    $rootScope,
    $scope,
    $state,
    $timeout,
    $localStorage) {
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
      }, 15000)
    };

    $scope.introText = 'Thank you for visiting my site';

    if (!$localStorage.yashWebsiteLoaded) {
      $timeout(function() {
        $scope.introText = 'Thank you for visiting my site';
        $scope.showIntroHeading = true;
        $timeout(function() {
          $scope.showIntroHeading = false;
          $timeout(function() {
            $scope.introText = "It's a pleasure to have you";
            $timeout(function() {
              $scope.showIntroHeading = true;
              $timeout(function() {
                $scope.showIntroHeading = false;
                $timeout(function() {
                  $scope.introText = 'You are visitor #';
                  $timeout(function() {
                    $scope.showIntroHeading = true;
                    $timeout(function() {
                      $scope.showVisitCount = true;
                      $timeout(function() {
                        $scope.loading = true;
                        $timeout(function() {
                          $scope.doneLoading = true;
                          $localStorage.yashWebsiteLoaded = true;
                          $rootScope.$emit('done loading');
                          $timeout(function() {
                            $scope.doneLoadingHide = true;
                          }, 1000);
                        }, 7000);
                      }, 300);
                    }, 500);
                  }, 400);
                }, 500);
              }, 3000);
            }, 400);
          }, 500);
        }, 4000);
      }, 300);
    } else {
      $timeout(function() {
        $scope.introText = 'Welcome Back! You are visitor #';
        $scope.showIntroHeading = true;
        $timeout(function() {
          $scope.showVisitCount = true;
          $timeout(function() {
            $scope.doneLoading = true;
            $localStorage.yashWebsiteLoaded = true;
            $rootScope.$emit('done loading');
            $timeout(function() {
              $scope.doneLoadingHide = true;
              if ($state.current.name !== "app.v1.landing-desktop") {
                console.log('#### Not going to the landing page');
                $rootScope.$emit('hide homepage');
              }
            }, 1000);
          }, 2000);
        }, 400);
      }, 300);
    }
    // UI responders
 
  }
]);
