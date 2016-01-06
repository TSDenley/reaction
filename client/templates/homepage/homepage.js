/**
* Home page
* Replaces the 'shop' view
*/

/**
* Helper methods
*/
Template.homepage.helpers({

	// Used to get print images
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

	slideImgPath() {
		return '/resources/images/';
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
				return meta[i].value;
			}
		}
	}

});


Template.homepage.onRendered(function(){

  /**
  * Init Swipers
  */
	let mainSwiper = new Swiper('.main-swiper-container', {
			pagination: '.swiper-pagination'
	});

	let showSwiper = new Swiper('.show-swiper-container', {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true
  });
});
