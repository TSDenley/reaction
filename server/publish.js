Meteor.publish('home_slides', function() {
	return home_slides.find();
});
