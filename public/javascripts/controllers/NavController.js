app.controller('NavController', [
  '$scope',
  '$rootScope',
  '$state',
  '$timeout',
  function(
    $rootScope,
    $scope,
    $state,
    $timeout) {
    'use strict';
    console.log('#### Nav Controller');

    // Init
    if ($state.current.name === 'app.v1.landing-desktop') {
      console.log('### On landing page - nav')
      $scope.stateLanding = true;
    } else {
      $scope.stateLanding = false;
    }
    $scope.previewState = {};
    $rootScope.showRightSideNav = false;
    // UI-responders
    $scope.hoverEffect = function() {
      $scope.navHover = true;
    };
    $scope.hoverOffEffect = function() {
      $scope.navHover = false;
    };

    $scope.setPreviewState = function(state) {
      $scope.showPreviewState = true;
      $rootScope.addAllTransitions = true;
      $scope.currentPreviewState = state;
      if (state === 'home') {
        $timeout(function() {
          $state.go('app.v1.landing-desktop');
        }, 400);
        $scope.previewState.heading = 'Home';
        $scope.previewState.description = 'Go back to the home page and stare at the gorgeous Milky Way.';
      }
      if (state === 'about') {
        $rootScope.$emit('hide home');
        $timeout(function() {
          $state.go('app.v1.landing-desktop', {goTo: 'app.v1.about-desktop'});
        }, 400);
        $scope.previewState.heading = 'About Me';
        $scope.previewState.description = "Read all about me. Have a look at where I came from, and the things that I have experienced.";
      }
      if (state === 'work') {
        $rootScope.$emit('hide home');
        $timeout(function() {
          $state.go('app.v1.landing-desktop', {goTo: 'app.v1.work-desktop'});
        }, 400);
        $scope.previewState.heading = 'My Work';
        $scope.previewState.description = 'Have a look at my professional work, and my personal projects. Sit back and watch videos, that will take you through each individual project.';
      }
    };
    $scope.removePreviewState = function() {
      if (!$scope.hideSideNav) {
        $scope.currentPreviewState = '';
        $scope.previewState = {};
        $rootScope.addAllTransitions = false;
      }
    };

    $scope.navItemHover = function(state) {
      $scope.activeNavState = state;
    };

    $scope.goToView = function(view) {
      $scope.previewState = {};
      $scope.hideSideNav = true;
      $timeout(function() {
        if(view !== 'app.v1.landing-desktop') {
          $rootScope.$emit('hide home');
        } else {
          $state.go('app.v1.landing-desktop');
        }
        $scope.toggleNav();
        $timeout(function() {
          $scope.hideSideNav = false;
        }, 400);
      }, 400);
    };
    // Ui-relayers    
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $timeout(function() {
        if ($state.current.name === 'app.v1.landing-desktop') {
          console.log('### On landing page - nav')
          $scope.stateLanding = true;
        } else {
          $scope.stateLanding = false;
        }
      }, 500);
    });


  }
]);
