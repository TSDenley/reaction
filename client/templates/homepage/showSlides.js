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


	/**
	* Returns the artist's name of a print
	* @param printID - string
	*/
	printsArtistName(printID) {
		let print = Products.findOne({ _id: printID }),
		meta = print.metafields;

		for (let i = 0; i < meta.length; i++) {
			if ( meta[i].key === 'Artist' ) {
				return toTitleCase( meta[i].value );
			}
		}
	},


	/**
	* Returns the year print was created
	* @param printID - string
	*/
	printYear(printID) {
		let print = Products.findOne({ _id: printID });
		return moment(print.createdAt).format('YYYY');
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
