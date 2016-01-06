/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

const staticPages = [ 'artists' ];

const showTagId = 'tm6ZME5p8ze28yoe7'; // Hardcoded tag ID

/**
 * app router mapping
 */
Router.map(function route() {

  for (let page of staticPages) {
    this.route(page, {
      controller: ShopController,
      name: page
    });
  }


  // Replace 'index' template with 'homepage/homepage.html'
  _.extend(Router.routes.index.options, {

    template: 'homepage',

    onBeforeAction() {
      $('body').addClass('hide-header');
      this.next();
    },

    onStop() {
      $('body').removeClass('hide-header');
    },

    data() {
      let printsArray = Products.find().fetch();

      return {
        showTag: Tags.findOne({ _id: showTagId }),

        showProducts: Products.find({
          hashtags: showTagId
        }).fetch(),

				homeSlides: home_slides.find().fetch(),

        artists: _.uniq(printsArray.map(function(prints) {
          let meta = prints.metafields;
          for (let i = 0; i < meta.length; i++) {
            if ( meta[i].key === 'Artist' ) {
              return meta[i].value;
            }
          }
        }))
      };
    },

		waitOn() {
      this.subscribe("home_slides");
      this.subscribe("Products", Session.get("productScrollLimit"));
    }

  });


  this.route('prints', {
    path: '/prints',
    name: 'prints',
    template: "products",
    controller: ShopController,
    waitOn() {
      return this.subscribe("Products", Session.get("productScrollLimit"));
    }
  });


  this.route('showing', {

		path: '/showing',
		name: 'showing',
		template: 'showing',
		controller: ShopController,

    data() {
      return {
        showTag: Tags.findOne({ _id: showTagId }),
        showProducts: Products.find({
          hashtags: showTagId
        }).fetch()
      };
    },

    waitOn() {
      return this.subscribe("Products", Session.get("productScrollLimit"));
    }

  });


  return this.route("notFound", {
    path: "/(.*)"
  });

});
