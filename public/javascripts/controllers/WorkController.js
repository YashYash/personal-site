app.controller('WorkController', [
  '$scope',
  '$state',
  '$rootScope',
  '$ionicSlideBoxDelegate',
  '$ionicScrollDelegate',
  'moment',
  'DataService',
  function(
    $scope,
    $state,
    $rootScope,
    $ionicSlideBoxDelegate,
    $ionicScrollDelegate,
    moment,
    DataService) {
    'use strict';
    console.log('#### Work Controller');

    // init
    $scope.workDuration = {
      hours: '',
      minutes: '',
      seconds: ''
    };

    var end = moment();
    var startDate = '04/01/2014';
    var start = moment.utc((startDate)).format('MM/DD/YYYY HH:mm:ss');
    var duration = moment.duration(end.diff(start));
    var hours = duration.asHours();
    var months = duration.asMonths();
    var days = duration.asDays();
    var minutes = duration.asMinutes();
    var seconds = duration.asSeconds();

    setTimeout(function() {
      $ionicSlideBoxDelegate.slide(5, 0);
      $ionicScrollDelegate.$getByHandle('workScroll').scrollTop();
    }, 100);

    $scope.slides = DataService.WorkSlides();
    $scope.professional4Paragraphs = DataService.Professional4();
    $scope.scrollHeadingOptions = [{
      scrollTop: 0
    }];
    $scope.mainHeading = 'Dashboard';
    // Functions called from within
    var GetWorkDuration = function() {
      setTimeout(function() {
        end = moment();
        duration = moment.duration(end.diff(start));
        hours = duration.asHours();
        months = duration.asMonths();
        days = duration.asDays();
        minutes = duration.asMinutes();
        seconds = duration.asSeconds();
        hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        $scope.workDuration.hours = hours;
        $scope.workDuration.minutes = minutes;
        $scope.workDuration.seconds = seconds;
        $scope.$apply();
        GetWorkDuration();
      }, 1000);
    };
    GetWorkDuration();

    $scope.bannerResize = function(delegate) {
      if (delegate === 'professionalFourScroll') {
        var scrollPosition = $ionicScrollDelegate.$getByHandle(delegate).getScrollPosition().top;
        $rootScope.$emit('work scrolling');
      }
      if ($ionicScrollDelegate.$getByHandle(delegate).getScrollPosition().top > 0) {
        if ($scope.lowerHeight !== 'true') {
          $scope.$apply(function() {
            $scope.lowerHeight = 'true';
          });
        }
      } else {
        if ($scope.lowerHeight !== 'false') {
          $scope.$apply(function() {
            $scope.lowerHeight = 'false';
          });
        }
      }
    };

    $rootScope.changeHeading = function(newHeading) {
        $scope.mainHeading = newHeading;
      }
      // UI responderss
    $scope.toLanding = function() {
      $state.go('app.v1.landing-mobile');
    };
    $scope.slideHasChanged = function(index) {
      $ionicScrollDelegate.$getByHandle('workScroll').scrollTop();
      $scope.currentSlide = index - 5;
    };
    $scope.professionalOneScrolling = function() {
      $scope.bannerResize('professionalOneScroll');
    };
    $scope.professionalTwoScrolling = function() {
      $scope.bannerResize('professionalTwoScroll');
    };
    $scope.professionalFourScrolling = function() {
      $scope.bannerResize('professionalFourScroll');
    };
  }
]);
