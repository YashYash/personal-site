app.factory('DataService', [
  '$rootScope',
  '$http',
  function(
    $rootScope,
    $http) {
    'use strict';
    console.log('#### Data Service');

    return {
      WorkSlides: function() {
        var slides = [{
          name: '5',
          path: '/views/v1/mobile/work/personal-5.html'
        }, {
          name: '4',
          path: '/views/v1/mobile/work/personal-4.html'
        }, {
          name: '3',
          path: '/views/v1/mobile/work/personal-3.html'
        }, {
          name: '2',
          path: '/views/v1/mobile/work/personal-2.html'
        }, {
          name: '1',
          path: '/views/v1/mobile/work/personal-1.html'
        }, {
          name: '0',
          path: '/views/v1/mobile/work/work-mobile-slide.html'
        }, {
          name: '1',
          path: '/views/v1/mobile/work/professional-1.html'
        }, {
          name: '2',
          path: '/views/v1/mobile/work/professional-2.html'
        }, {
          name: '3',
          path: '/views/v1/mobile/work/professional-3.html'
        }, {
          name: '4',
          path: '/views/v1/mobile/work/professional-4.html'
        }, {
          name: '5',
          path: '/views/v1/mobile/work/professional-5.html'
        }];
        return slides;
      },
      Professional4: function() {
        var paragraphs = [{
          title: 'Introduction',
          paragraph: "SpotOn allows small and big businesses to to push events into their users' calendars. They can do this by using our 'Add-to-calendar' button, which they can add to their website, embed in their email and place it on their facebook page. Once their users add their events to their calendars, we give the businesses the ability to edit them. The Los Angeles Lakers are one of our clients. If one of their fans add a game to their calendar, we give the Lakers the ability to push real time updates. For example, if Kobe gets injured, knock on wood, they can go to their dashboard and edit that event's description. Once they submit their form, all their subsribers will get a calendar notication on their phone letting them know the bad news. The dashboard has the following tabs:",
        }, {
          title: 'Events',
          paragraph: "The events tab is where the business can see all their events. Some of our clients, like Stanford, have a lot of events. Therefore I implemented infinite scroll allowing them to quckly scroll throgh thousands of events. This tab is used to edit, create and delete events. It was very important to make the user interface simple and starght forward, since our product is pretty complicated. We started of by working on the ability to add an event. The serverside part was not very complicated, however the UI/UX on the front end wasn't so simple. Some of our clients add multiple events on a daily basis. So we decided to implement 'quick add'. It's a google api that can pull out dates, titles and durations from a sentence. So when a business adds and event they can just type, 'Autograph signing next week at 2pm for 3 hours'. This will auto fill their form. On the form they can verify the dates and title. They can also add ticketing links, uber links, a location and a description. This exact same form is used to edit an event as well. I added little check boxes beside each event. This allows our clients to delete mulitple events at once.",
        }, {
          title: 'Embed',
          paragraph: "The emebed tab is used to help our clients get the code that they need to embed our button on their website, facebook page or even an email. We decided to make this tab NOT developer friendly. All our cilents aren't very tech savy, therefore we made the UI simple for anyone to use. They choose the type of button, ticker or no ticker, and then they click build it. This generates the code need to build that button. The client can give this code to their developers, or copy and paste it themselves.",
        }, {
          title: 'Account',
          paragraph: "The account tab allows our clients to change their calendar's name, as well as their banner photo. All our clients have a button popup, and each of the button popups have a background image field in their schema. This tab allows them to change the image field in that schema. I used AWS and filepicker.io to implement the image picker. This is a very simple tab, with very little functionality, as it should be."
        }];
        return paragraphs;
      },
      codeSkills: function() {
        var skills = [{
        	name: 'Html5',
        	level: 75,
        	logo: 'http://fc07.deviantart.net/fs70/i/2011/018/5/b/psd_of_html5_logo_by_tobrother-d37hlwk.png'
        }, {
        	name: 'Css3',
        	level: 75,
        	logo: 'http://dhainautraphael.azurewebsites.net/Images/CSS3-logo.svg'
        }, {
        	name: 'JavaScript',
        	level: 75,
        	logo: 'http://cursohtml5js.com/js.png'
        }, {
        	name: 'Python',
        	level: 50,
        	logo: 'http://romillyhills.co.uk/images/python%20logo.jpg'
        }, {
        	name: 'Jade',
        	level: 75,
        	logo: 'http://jadenet.org/jenet/public/files/jade/logo_jade.png'
        }, {
        	name: 'Stylus',
        	level: 75,
        	logo: 'https://blog.codepen.io/wp-content/uploads/2013/09/stylus-logo.png'
        }, {
        	name: 'JQuery',
        	level: 75,
        	logo: 'http://www.codeforest.net/wp-content/uploads/2011/01/jquery-logo.jpg'
        }, {
        	name: 'AngularJs',
        	level: 75,
        	logo: 'http://www.unixstickers.com/image/cache/data/stickers/angularjs/angular-js-600x600.png'        	
        }, {
        	name: 'EmberJs',
        	level: 50,
        	logo: 'http://blog.altoros.com/wp-content/uploads/2013/06/emberjs-logo-web1.jpg'        	
        }, {
        	name: 'Ionic',
        	level: 75,
        	logo: 'http://siliconangle.com/files/2013/11/ionic-html5-native-framework.jpg'        	
        }, {
        	name: 'NodeJs',
        	level: 75,
        	logo: 'http://photos4.meetupstatic.com/photos/event/4/e/7/2/global_91340082.jpeg'
        }, {
        	name: 'Django',
        	level: 65,
        	logo: 'http://www.unixstickers.com/image/cache/data/stickers/django/django-neg.sh-600x600.png'
        }, {
        	name: 'Firebase',
        	level: 75,
        	logo: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/13274-1e708e28fa58694493de9b2f3bf08a11-medium_jpg.jpg?buster=1334550800'
        }, {
        	name: 'MongoDb',
        	level: 75,
        	logo: 'https://pbs.twimg.com/profile_images/2452709870/wo2h8r0qy8d5lsxe5lgd_400x400.png'
        }, {
        	name: 'MySQL',
        	level: 50,
        	logo: 'http://www.logoeps.com/wp-content/uploads/2012/03/mysql-vector1.jpg'
        }, {
        	name: 'PostgreSQL',
        	level: 50,
        	logo: 'http://logonoid.com/images/postgresql-logo.png'
        }, {
        	name: 'Express',
        	level: 75,
        	logo: 'http://express-io.org/static/images/logo-bright2-14b1194d03e06bd8292d4f3f1c4cb115.png'
        }, {
        	name: 'Socket.io',
        	level: 75,
        	logo: 'https://pbs.twimg.com/profile_images/470682672235151360/vI0ZZlhZ.png'
        }, {
        	name: 'PeerJs',
        	level: 55,
        	logo: 'http://www.h-online.com/imgs/43/9/8/3/6/9/8/PeerJS-1db1213db856613f.png'
        }, {
        	name: 'Meteor',
        	level: 50,
        	logo: 'http://4vector.com/thumb_data/afd-34011.jpg'
        }, {
        	name: 'WebRTC',
        	level: 50,
        	logo: 'http://blog.tmcnet.com/blog/tom-keating/images/google-webrtc-logo.jpg'
        }];
        return skills;
      }, 
      designSkills: function() {
      	var skills = [{
      		name: 'Photoshop',
      		level: 60,
      		logo: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/2000px-Adobe_Photoshop_CS6_icon.svg.png'
      	}, {
      		name: 'Illustrator',
      		level: 50,
      		logo: 'http://upload.wikimedia.org/wikipedia/commons/7/79/Adobe_Illustrator_CS5_icon.png'
      	}, {
      		name: 'After Effects',
      		level: 30,
      		logo: 'http://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_After_Effects_CS6_Icon.png'
      	}];
      	return skills;
      }
    }
  }
]);
