Template.linkedProducts.helpers({

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
		}).fetch();

		return shuffleArray( otherPrints ).slice( 0, 3 );
	},


	/**
	* Get other prints from the same show
	* Limit to 3, exclude current print
	*/
	otherShowWorks() {
		let product = selectedProduct();

		let showPrints = Products.find({
			hashtags: showTagId,
			_id: { $ne: product._id }
		}).fetch();

		return shuffleArray( showPrints ).slice( 0, 3 );
	}
});


Template.linkedProduct.helpers({
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


Template.linkedProduct.onRendered(function(){
	$('.grid').imagesLoaded(function() {
		$('.grid').each(function () {
			let $grid = $(this).masonry({
				itemSelector: '.grid-item',
				percentPosition: true
			});

			$grid.masonry('reloadItems');
		});
	});
});
