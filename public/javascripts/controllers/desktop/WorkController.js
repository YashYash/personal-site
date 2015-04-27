app.controller('WorkDesktopController', [
  '$scope',
  '$timeout',
  'moment',
  function(
    $scope,
    $timeout,
    moment) {
    'use strict';
    console.log('#### Work Desktop Controller');

    // init
    $scope.today = moment();
    var stanzaVideoDesktop = document.getElementById("stanzaVideoDesktop");
    var stanzaVideoMobile = document.getElementById("stanzaVideoMobile");
    var puffVideoMobile = document.getElementById("puffVideoMobile");
    var ikedaVideoDesktop = document.getElementById("ikedaVideoDesktop");
    var ikedaVideoMobile = document.getElementById("ikedaVideoMobile");
    var buttonVideoDesktop = document.getElementById("buttonVideoDesktop");
    var buttonVideoMobile = document.getElementById("buttonVideoMobile");
    var stimelineVideoDesktop = document.getElementById("stimelineVideoDesktop");
    var stimelineVideoMobile = document.getElementById("stimelineVideoMobile");
    var pinpointVideoDesktop = document.getElementById("pinpointVideoDesktop");
    var pinpointVideoMobile = document.getElementById("pinpointVideoMobile");    
    $scope.stanzaVideoState = 'desktop';
    $scope.ikedaVideoState = 'desktop';
    $scope.buttonVideoState = 'desktop';
    $scope.stimelineVideoState = 'desktop';
    $scope.pinpointVideoState = 'desktop';
    $scope.showStanzaVideoOverlay = true;
    $scope.showStanzaVideoOverlayMobile = true;
    $scope.stanzaVideoDesktopStateDisplay = true;
    $scope.stanzaVideoDesktopState = true;
    $scope.showPuffVideoOverlayMobile = true;
    $scope.showIkedaVideoOverlay = true;
    $scope.showIkedaVideoOverlayMobile = true;
    $scope.ikedaVideoDesktopStateDisplay = true;
    $scope.ikedaVideoDesktopState = true;
    $scope.showButtonVideoOverlay = true;
    $scope.showButtonVideoOverlayMobile = true;
    $scope.buttonVideoDesktopStateDisplay = true;
    $scope.buttonVideoDesktopState = true;
    $scope.showStimelineVideoOverlay = true;
    $scope.showStimelineVideoOverlayMobile = true;    
    $scope.stimelineVideoDesktopStateDisplay = true;
    $scope.stimelineVideoDesktopState = true;
    $scope.showPinpointVideoOverlay = true;
    $scope.showPinpointVideoOverlayMobile = true;    
    $scope.pinpointVideoDesktopStateDisplay = true;
    $scope.pinpointVideoDesktopState = true;    
    // Ui-responders
    $scope.setWorkTab = function(tab) {
      $scope.workTab = tab;
      if (tab === 'none') {
        $scope.currentBackground = 'https://dff2h0hbfv6w4.cloudfront.net/ZAXSCDVF12345/work-background-one.jpg';
        $scope.shiftLeft = false;
      }
      if (tab === 'tech') {
        $scope.currentBackground = 'https://dff2h0hbfv6w4.cloudfront.net/ZAXSCDVF12345/work-background-one.jpg';
        $scope.shiftLeft = true;
      }
      if (tab === 'design') {
        $scope.currentBackground = 'https://dff2h0hbfv6w4.cloudfront.net/ZAXSCDVF12345/work-background-two.jpg';
        $scope.shiftLeft = true;
      }
      if (tab === 'business') {
        $scope.currentBackground = 'https://dff2h0hbfv6w4.cloudfront.net/ZAXSCDVF12345/work-background-four.jpg';
        $scope.shiftLeft = true;
      }
      if (tab !== 'none') {
        $scope.shiftLeft = true;
        $timeout(function() {
          $scope.showWorkNavigator = true;
        }, 1500);
      } else {
        $scope.showWorkNavigator = false;
        $timeout(function() {
          $scope.shiftLeft = false;
        }, 1500);
      }
    };
    $scope.setWorkTab('none');


    // Stanza section ui-responders
    $scope.showStanzaVideoDesktopState = function() {
      $scope.stanzaVideoState = 'desktop';
      $scope.stanzaVideoMobileState = false;
      $timeout(function() {
        $scope.stanzaVideoMobileStateDisplay = false;
      }, 600);

      $scope.stanzaVideoDesktopStateDisplay = true;
      $timeout(function() {
        $scope.stanzaVideoDesktopState = true;
      }, 600);
      $scope.showStanzaVideoOverlayMobile = true;
      stanzaVideoMobile.pause();
    };
    $scope.showStanzaVideoMobileState = function() {
      $scope.stanzaVideoState = 'mobile';
      $scope.stanzaVideoDesktopState = false;
      $timeout(function() {
        $scope.stanzaVideoDesktopStateDisplay = false;
      }, 600);
      $scope.stanzaVideoMobileStateDisplay = true;
      $timeout(function() {
        $scope.stanzaVideoMobileState = true;
      }, 600);
      $scope.showStanzaVideoOverlay = true;
      stanzaVideoDesktop.pause();
    };
    $scope.playStanzaDesktopVideo = function() {
      if (stanzaVideoDesktop.paused) {
        $scope.showStanzaVideoOverlay = false;
        stanzaVideoDesktop.play();
      } else {
        $scope.showStanzaVideoOverlay = true;
        stanzaVideoDesktop.pause();
      }
    };
    $scope.playStanzaMobileVideo = function() {
      if (stanzaVideoMobile.paused) {
        $scope.showStanzaVideoOverlayMobile = false;
        stanzaVideoMobile.play();
      } else {
        $scope.showStanzaVideoOverlayMobile = true;
        stanzaVideoMobile.pause();
      }
    };


    // Puff
    $scope.playPuffMobileVideo = function() {
      if (puffVideoMobile.paused) {
        $scope.showPuffVideoOverlayMobile = false;
        puffVideoMobile.play();
      } else {
        $scope.showPuffVideoOverlayMobile = true;
        puffVideoMobile.pause();
      }
    };

    // Ikeda
    $scope.showIkedaVideoDesktopState = function() {
      $scope.ikedaVideoState = 'desktop';
      $scope.ikedaVideoMobileState = false;
      $timeout(function() {
        $scope.ikedaVideoMobileStateDisplay = false;
      }, 600);

      $scope.ikedaVideoDesktopStateDisplay = true;
      $timeout(function() {
        $scope.ikedaVideoDesktopState = true;
      }, 600);
      $scope.showIkedaVideoOverlayMobile = true;
      ikedaVideoMobile.pause();
    };
    $scope.showIkedaVideoMobileState = function() {
      $scope.ikedaVideoState = 'mobile';
      $scope.ikedaVideoDesktopState = false;
      $timeout(function() {
        $scope.ikedaVideoDesktopStateDisplay = false;
      }, 600);
      $scope.ikedaVideoMobileStateDisplay = true;
      $timeout(function() {
        $scope.ikedaVideoMobileState = true;
      }, 600);
      $scope.showIkedaVideoOverlay = true;
      ikedaVideoDesktop.pause();
    };
    $scope.playIkedaDesktopVideo = function() {
      if (ikedaVideoDesktop.paused) {
        $scope.showIkedaVideoOverlay = false;
        ikedaVideoDesktop.play();
      } else {
        $scope.showIkedaVideoOverlay = true;
        ikedaVideoDesktop.pause();
      }
    };
    $scope.playIkedaMobileVideo = function() {
      if (ikedaVideoMobile.paused) {
        $scope.showIkedaVideoOverlayMobile = false;
        ikedaVideoMobile.play();
      } else {
        $scope.showIkedaVideoOverlayMobile = true;
        ikedaVideoMobile.pause();
      }
    };

    // Button
    $scope.showButtonVideoDesktopState = function() {
      $scope.buttonVideoState = 'desktop';
      $scope.buttonVideoMobileState = false;
      $timeout(function() {
        $scope.buttonVideoMobileStateDisplay = false;
      }, 600);

      $scope.buttonVideoDesktopStateDisplay = true;
      $timeout(function() {
        $scope.buttonVideoDesktopState = true;
      }, 600);
      $scope.showButtonVideoOverlayMobile = true;
      buttonVideoMobile.pause();
    };
    $scope.showButtonVideoMobileState = function() {
      $scope.buttonVideoState = 'mobile';
      $scope.buttonVideoDesktopState = false;
      $timeout(function() {
        $scope.buttonVideoDesktopStateDisplay = false;
      }, 600);
      $scope.buttonVideoMobileStateDisplay = true;
      $timeout(function() {
        $scope.buttonVideoMobileState = true;
      }, 600);
      $scope.showButtonVideoOverlay = true;
      buttonVideoDesktop.pause();
    };
    $scope.playButtonDesktopVideo = function() {
      if (buttonVideoDesktop.paused) {
        $scope.showButtonVideoOverlay = false;
        buttonVideoDesktop.play();
      } else {
        $scope.showButtonVideoOverlay = true;
        buttonVideoDesktop.pause();
      }
    };
    $scope.playButtonMobileVideo = function() {
      if (buttonVideoMobile.paused) {
        $scope.showButtonVideoOverlayMobile = false;
        buttonVideoMobile.play();
      } else {
        $scope.showButtonVideoOverlayMobile = true;
        buttonVideoMobile.pause();
      }
    };

    // Stanza timeline
    $scope.showStimelineVideoDesktopState = function() {
      $scope.stimelineVideoState = 'desktop';
      $scope.stimelineVideoMobileState = false;
      $timeout(function() {
        $scope.stimelineVideoMobileStateDisplay = false;
      }, 600);

      $scope.stimelineVideoDesktopStateDisplay = true;
      $timeout(function() {
        $scope.stimelineVideoDesktopState = true;
      }, 600);
      $scope.showStimelineVideoOverlayMobile = true;
      stimelineVideoMobile.pause();
    };
    $scope.showStimelineVideoMobileState = function() {
      $scope.stimelineVideoState = 'mobile';
      $scope.stimelineVideoDesktopState = false;
      $timeout(function() {
        $scope.stimelineVideoDesktopStateDisplay = false;
      }, 600);
      $scope.stimelineVideoMobileStateDisplay = true;
      $timeout(function() {
        $scope.stimelineVideoMobileState = true;
      }, 600);
      $scope.showStimelineVideoOverlay = true;
      stimelineVideoDesktop.pause();
    };
    $scope.playStimelineDesktopVideo = function() {
      if (stimelineVideoDesktop.paused) {
        $scope.showStimelineVideoOverlay = false;
        stimelineVideoDesktop.play();
      } else {
        $scope.showStimelineVideoOverlay = true;
        stimelineVideoDesktop.pause();
      }
    };
    $scope.playStimelineMobileVideo = function() {
      if (stimelineVideoMobile.paused) {
        $scope.showStimelineVideoOverlayMobile = false;
        stimelineVideoMobile.play();
      } else {
        $scope.showStimelineVideoOverlayMobile = true;
        stimelineVideoMobile.pause();
      }
    };

    // Pinpoint
    $scope.showPinpointVideoDesktopState = function() {
      $scope.pinpointVideoState = 'desktop';
      $scope.pinpointVideoMobileState = false;
      $timeout(function() {
        $scope.pinpointVideoMobileStateDisplay = false;
      }, 600);

      $scope.pinpointVideoDesktopStateDisplay = true;
      $timeout(function() {
        $scope.pinpointVideoDesktopState = true;
      }, 600);
      $scope.showPinpointVideoOverlayMobile = true;
      pinpointVideoMobile.pause();
    };
    $scope.showPinpointVideoMobileState = function() {
      $scope.pinpointVideoState = 'mobile';
      $scope.pinpointVideoDesktopState = false;
      $timeout(function() {
        $scope.pinpointVideoDesktopStateDisplay = false;
      }, 600);
      $scope.pinpointVideoMobileStateDisplay = true;
      $timeout(function() {
        $scope.pinpointVideoMobileState = true;
      }, 600);
      $scope.showPinpointVideoOverlay = true;
      pinpointVideoDesktop.pause();
    };
    $scope.playPinpointDesktopVideo = function() {
      if (pinpointVideoDesktop.paused) {
        $scope.showPinpointVideoOverlay = false;
        pinpointVideoDesktop.play();
      } else {
        $scope.showPinpointVideoOverlay = true;
        pinpointVideoDesktop.pause();
      }
    };
    $scope.playPinpointMobileVideo = function() {
      if (pinpointVideoMobile.paused) {
        $scope.showPinpointVideoOverlayMobile = false;
        pinpointVideoMobile.play();
      } else {
        $scope.showPinpointVideoOverlayMobile = true;
        pinpointVideoMobile.pause();
      }
    };    
  }
]);
