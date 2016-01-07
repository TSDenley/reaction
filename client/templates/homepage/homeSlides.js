Template.homeSlides.helpers({
	slides() {
		return home_slides.find({}, { sort: { createdAt: 1 } });
	},
	slideImgPath() {
		return '/resources/images/';
	}
});

Template.homeSlides.onRendered(function() {
	Meteor.defer(function(){
		let mainSwiper = new Swiper('.main-swiper-container', {
			pagination: '.swiper-pagination'
		});
	});
});
