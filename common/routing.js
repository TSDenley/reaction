/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

let staticPages = [ 'showing', 'artists' ];

var Slides = new Mongo.Collection('home_slides');

console.log(Slides.find().fetch());

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


  // Replace 'index' template with 'static/home'
  _.extend(Router.routes.index.options, {

    template: 'homepage',

    data: function() {
      const showTagId = 'tm6ZME5p8ze28yoe7'; // Hardcoded tag ID

      return {
        showTag: Tags.findOne({ _id: showTagId }),
        showProducts: Products.find({
          hashtags: showTagId
        }).fetch(),
				homeSlides: homes_slides.find().fetch()
      };

    },

		waitOn: function () {
      this.subscribe("homes_slides", Session.get("productScrollLimit"));
      this.subscribe("Products", Session.get("productScrollLimit"));
    }
  });


  this.route('prints', {
    path: '/prints',
    name: 'prints',
    template: "products",
    controller: ShopController,
    waitOn: function () {
      return this.subscribe("Products", Session.get("productScrollLimit"));
    }
  });

  return this.route("notFound", {
    path: "/(.*)"
  });
});
