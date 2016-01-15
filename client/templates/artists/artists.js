Template.artistsPrint.helpers({

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
	}

});

Template.artistsPrint.onRendered(function(){
	$(function(){
		let swiper = new Swiper('.artist-swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: 20,
			freeMode: true
		});
	});
});
