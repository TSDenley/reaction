Template.linkedProducts.helpers({

	/**
	* Print images
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


	/**
	* Get other prints from the same artist (max 3)
	*/
	artistOtherWorks() {
		let product = selectedProduct(),
			artist = null;

		for (var i = 0; i < product.metafields.length; i++) {
			let field = product.metafields[i];

			if ( field.key === 'Artist' ) {
				artist = field.value;
				break;
			}
		}

		let otherPrints = Products.find({
			'metafields.key': 'Artist',
			'metafields.value': artist,
			_id: { $ne: product._id }
		}).fetch().slice( 0, 3 );

		return shuffleArray( otherPrints );
	},


	/**
	* Get other prints from the same show (limit 3)
	*/
	otherShowWorks() {
		let product = selectedProduct();

		let showPrints = Products.find({
			hashtags: showTagId,
			_id: { $ne: product._id }
		}).fetch().slice( 0, 3 );

		return shuffleArray( showPrints );
	}
});


Template.linkedProducts.onRendered(function(){
	Meteor.defer(function(){
		$('.grid').imagesLoaded(function() {
			this.masonry({
				itemSelector: '.grid-item',
				percentPosition: true
			});
		});
	});
});
