app.controller('LandingController', [
  '$scope',
  '$state',
  '$rootScope',
  '$timeout',
  '$ionicSlideBoxDelegate',
  '$ionicScrollDelegate',
  'DataService',
  function(
    $scope,
    $state,
    $rootScope,
    $timeout,
    $ionicSlideBoxDelegate,
    $ionicScrollDelegate,
    DataService) {
    'use strict';
    console.log('#### Landing Controller');

    // init
    $scope.currNumber = '0';
    $scope.activeSkill = 1;
    $scope.skillsHeading = 'Coding';
    $scope.codeSkills = DataService.codeSkills();
    $scope.designSkills = DataService.designSkills();
    $scope.noWidth = true;
    $scope.slides = [{
      number: '1',
      path: '/views/v1/contact-slide.html'
    }, {
      number: '0',
      path: '/views/v1/landing-slide.html'
    }, {
      number: '1',
      path: '/views/v1/about-me-1.html'
    }, {
      number: '2',
      path: '/views/v1/about-me-2.html'
    }];
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
    $scope.toWork = function() {
      console.log('#### Going to work experience');
      $state.go('app.v1.work-mobile');
    };

    $scope.toEntertainment = function() {
      console.log('#### Going to work Entertainment');
      $state.go('app.v1.entertainment-mobile');
    };
    $scope.setActiveSkill = function(skill) {
      $scope.activeSkill = skill;
      $scope.animateSkills();
      if (skill === 1) {
        $scope.skillsHeading = 'Coding';
      }
      if (skill === 2) {
        $scope.skillsHeading = 'Design';
      }
      // if (skill === 3) {
      //   $scope.skillsHeading = 'Business';
      // }
    };

    // Animations
    $scope.aboutMeAnimtaions = function(cancel) {
      if (!cancel) {
        $scope.aboutMeAnimationsTimeouts = {};
        $scope.aboutMeAnimationsTimeouts.showname = $timeout(function() {
          $scope.showFullName = true;
          $scope.aboutMeAnimationsTimeouts.showskills = $timeout(function() {
            $scope.showSkill = 1;
            $scope.aboutMeAnimationsTimeouts.showskillstwo = $timeout(function() {
              $scope.showSkill = 2;
              $scope.aboutMeAnimationsTimeouts.showskillsthree = $timeout(function() {
                $scope.showSkill = 3;
                $scope.aboutMeAnimationsTimeouts.showaboutmeparagraph = $timeout(function() {
                  $scope.showAboutMeParagraph = true;
                }, 500);
              }, 300);
            }, 200);
          }, 100);
        }, 500);
      } else {
        for (var key in $scope.aboutMeAnimationsTimeouts) {
          $timeout.cancel($scope.aboutMeAnimationsTimeouts[key]);
        }
        $scope.showFullName = false;
        $scope.showSkill = 0;
        $scope.showAboutMeParagraph = false;
      }
    };
    $scope.animateSkills = function(cancel) {
      if (!cancel) {
      	$scope.noWidth = true;
        $scope.skillsAnimationsTimeouts = {};
        $scope.skillsAnimationsTimeouts.addWidth = $timeout(function() {
          $scope.noWidth = false;
        }, 500);
      } else {
        for (var key in $scope.skillsAnimationsTimeouts) {
          $timeout.cancel($scope.skillsAnimationsTimeouts[key]);
        }
        $scope.noWidth = true;
      }
    };

    $scope.slideHasChanged = function(index) {
      if (index !== 1) {
        $scope.hideIcons = true;
      } else {
        $scope.hideIcons = false;
      }
      $ionicScrollDelegate.$getByHandle('landingScroll').scrollTop();
      if (index === 2) {
        $scope.aboutMeAnimtaions();
      } else {
        $scope.aboutMeAnimtaions('cancel');
      }
      if (index === 3) {
        $scope.animateSkills();
      } else {
        $scope.animateSkills('cancel');
      }
    };

  }
]);
