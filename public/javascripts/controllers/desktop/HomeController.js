app.controller('HomeController', [
  '$scope',
  '$rootScope',
  '$timeout',
  '$state',
  function(
    $scope,
    $rootScope,
    $timeout,
    $state) {
    'use strict';
    console.log('#### Home Controller');


    // Init
    $scope.startHomeAnimations = function() {
      $timeout(function() {
        $scope.showName = true;
        $timeout(function() {
          $scope.showSubHeadingOne = true;
          $timeout(function() {
            $scope.showSubHeadingTwo = true;
            $timeout(function() {
              $scope.showSubHeadingThree = true;
              $timeout(function() {
                $scope.showBorderBottom = true;
                $timeout(function() {
                  $scope.showCircleOne = true;
                  $timeout(function() {
                    $scope.showCircleTwo = true;
                    $timeout(function() {
                      $scope.showCircleThree = true;
                      $timeout(function() {
                        $scope.showCircleFour = true;
                        $timeout(function() {
                          $scope.animateCircles();
                        }, 300);
                      }, 300);
                    }, 300);
                  }, 300);
                }, 300);
              }, 300);
            }, 300);
          }, 300);
        }, 400);
      }, 700);
    };

    $scope.animateCircles = function() {
      var animateCircle = function(circle) {
        var circleTitle;
        if (circle === 0) {
          circleTitle = 'about';
        }
        if (circle === 1) {
          circleTitle = 'work';
        }
        if (circle === 2) {
          circleTitle = 'entertainment';
        }
        if (circle === 3) {
          circleTitle = 'contact';
        }
        $scope.currentPreviewState = circleTitle;
        var newCircle = circle + 1;
        if (newCircle < 6) {
          $timeout(function() {
            animateCircle(newCircle);
          }, 400);
        }
      }
      animateCircle(0);
    };

    // Ui responders
    $scope.showCurrentPage = false;
    $scope.previewState = function(state) {
      $scope.currentPreviewState = state;
      if (state === 'none') {
        $scope.lessenOpacity = false;
        $scope.showCurrentPage = false;
        $timeout(function() {
          $scope.currentHeading = '';
          $scope.currentSubHeading = '';
        }, 500);
      } else {
        $scope.showCurrentPage = true;
        $scope.lessenOpacity = true;
      }
      if (state === 'about') {
        $state.go('app.v1.about-desktop');
        $scope.currentHeading = 'About Me';
        $scope.currentSubHeading = 'Read about my background, and see what I am interested in';
      }
      if (state === 'work') {
        $state.go('app.v1.work-desktop');
        $scope.currentHeading = 'My Work';
        $scope.currentSubHeading = 'Check out my professional work, and my personal projects';
      }
      if (state === 'entertainment') {
        $state.go('app.v1.entertainment-desktop');
        $scope.currentHeading = 'Get Entertained';
        $scope.currentSubHeading = 'Listen to my favorite music and watch my favorite videos';
      }
      if (state === 'contact') {
        $state.go('app.v1.contact-desktop');
        $scope.currentHeading = 'Contact Me';
        $scope.currentSubHeading = 'Get ways to contact me and find me on social media';
      }
    };

    $scope.goToView = function(view) {
      $scope.fadeOutHomePage = true;
      $timeout(function() {
        $scope.hideHomePage = true;
      }, 1500);
    };

    $scope.showHomePage = function() {
      $scope.hideHomePage = false;
      $timeout(function() {
        $scope.fadeOutHomePage = false;
      }, 1010);
    };
    // UI relayers
    $rootScope.$on('done loading', function() {
      $timeout(function() {
        $scope.startHomeAnimations();
        console.log('#### Starting the animations');
      }, 500);
    });
    $rootScope.$on('hide homepage', function() {
      $scope.goToView();
    });
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $timeout(function() {
        if ($state.current.name === "app.v1.landing-desktop") {
          $scope.showHomePage();
        }
      }, 500);
    });
  }
])
