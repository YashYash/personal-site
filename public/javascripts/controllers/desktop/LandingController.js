app.controller('LandingDesktopController', [
  '$scope',
  '$stateParams',
  '$state',
  function(
    $scope,
    $stateParams,
    $state) {
    'use strict';
    console.log('#### Landing Desktop Controller');

    // init
    if ($stateParams.goTo) {
      console.log('### Go to exists');
      $state.go($stateParams.goTo)
    }
  }
]);
