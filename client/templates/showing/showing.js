/**
* Home page
* Replaces the 'shop' view
*/

Template.showingPrint.helpers({

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


Template.showingPrint.onRendered(function() {
	$('.grid').imagesLoaded(function() {
		$('.grid').masonry({
			itemSelector: '.grid-item',
			percentPosition: true
		});
	});
});
