Template.homeSlides.helpers({
	slides() {
		return home_slides.find({}, { sort: { createdAt: 1 } });
	}
});


Template.homeSlide.helpers({
	slideImgPath() {
		return '/resources/images/';
	}
});


Template.homeSlide.onRendered(function() {
	$(function() {
		let mainSwiper = new Swiper('.main-swiper-container', {
			pagination: '.swiper-pagination'
		});
	});
});
