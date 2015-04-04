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
			var slides = [
				{
					name:'5',
					path: '/views/v1/personal-5.html'		
				},{
					name:'4',
					path: '/views/v1/personal-4.html'		
				},{
					name:'3',
					path: '/views/v1/personal-3.html'		
				},{
					name:'2',
					path: '/views/v1/personal-2.html'		
				},{
					name:'1',
					path: '/views/v1/personal-1.html'		
				},{
					name:'0',
					path: '/views/v1/work-mobile-slide.html'		
				},{
					name:'1',
					path: '/views/v1/professional-1.html'		
				},{
					name:'2',
					path: '/views/v1/professional-2.html'		
				},{
					name:'3',
					path: '/views/v1/professional-3.html'		
				},{
					name:'4',
					path: '/views/v1/professional-4.html'		
				},{
					name:'5',
					path: '/views/v1/professional-5.html'		
				}				
			];
			return slides;
		},
		Professional4: function() {
			var paragraphs = [
				{
					title: 'Introduction',
					paragraph: "SpotOn allows small and big businesses to to push events into their users' calendars. They can do this by using our 'Add-to-calendar' button, which they can add to their website, embed in their email and place it on their facebook page. Once their users add their events to their calendars, we give the businesses the ability to edit them. The Los Angeles Lakers are one of our clients. If one of their fans add a game to their calendar, we give the Lakers the ability to push real time updates. For example, if Kobe gets injured, knock on wood, they can go to their dashboard and edit that event's description. Once they submit their form, all their subsribers will get a calendar notication on their phone letting them know the bad news. The dashboard has the following tabs:",
				},{
					title: 'Events',
					paragraph: "The events tab is where the business can see all their events. Some of our clients, like Stanford, have a lot of events. Therefore I implemented infinite scroll allowing them to quckly scroll throgh thousands of events. This tab is used to edit, create and delete events. It was very important to make the user interface simple and starght forward, since our product is pretty complicated. We started of by working on the ability to add an event. The serverside part was not very complicated, however the UI/UX on the front end wasn't so simple. Some of our clients add multiple events on a daily basis. So we decided to implement 'quick add'. It's a google api that can pull out dates, titles and durations from a sentence. So when a business adds and event they can just type, 'Autograph signing next week at 2pm for 3 hours'. This will auto fill their form. On the form they can verify the dates and title. They can also add ticketing links, uber links, a location and a description. This exact same form is used to edit an event as well. I added little check boxes beside each event. This allows our clients to delete mulitple events at once.",
				},{
					title: 'Embed',
					paragraph: "The emebed tab is used to help our clients get the code that they need to embed our button on their website, facebook page or even an email. We decided to make this tab NOT developer friendly. All our cilents aren't very tech savy, therefore we made the UI simple for anyone to use. They choose the type of button, ticker or no ticker, and then they click build it. This generates the code need to build that button. The client can give this code to their developers, or copy and paste it themselves.",
				},{
					title: 'Account',
					paragraph: "The account tab allows our clients to change their calendar's name, as well as their banner photo. All our clients have a button popup, and each of the button popups have a background image field in their schema. This tab allows them to change the image field in that schema. I used AWS and filepicker.io to implement the image picker. This is a very simple tab, with very little functionality, as it should be."
				}				
			];
			return paragraphs;
		}
	}
}]);