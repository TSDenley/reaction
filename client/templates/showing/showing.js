/**
* Home page
* Replaces the 'shop' view
*/

/**
* Helper methods
*/
Template.showing.helpers({

  media( print ) {
		let defaultImage;
		let variantId;
		let variants = [];

		for (let variant of print.variants) {
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



Template.showing.onRendered(function(){
	Meteor.defer(function(){
		$('.grid').imagesLoaded(function() {
			this.masonry({
				itemSelector: '.grid-item',
				percentPosition: true
			});
		});
	});
});
