Template.showSlides.helpers({

	/**
	* Get print images
	*/
	media() {
		let defaultImage;
		let variantId;
		let variants = [];

		for (let variant of this.variants) {
			if (!variant.parentId) {
				variants.push(variant);
			}
		}

		if (variants.length > 0) {
			variantId = variants[0]._id;
			defaultImage = ReactionCore.Collections.Media.findOne({
				"metadata.variantId": variantId,
				"metadata.priority": 0
			});
		}

		if (defaultImage) {
			return defaultImage;
		}

		return false;
	},


	slides() {
		return Products.find(
			{ hashtags: showTagId },
			{ sort: { createdAt: 1 } }
		);
	}
});


Template.showSlides.onRendered(function(){
	Meteor.defer(function(){
		let showSwiper = new Swiper('.show-swiper-container', {
			slidesPerView: 2,
			spaceBetween: 20,
			freeMode: true
		});
	});
});
