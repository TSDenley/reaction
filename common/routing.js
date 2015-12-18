/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

let staticPages = [ 'artists' ];

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


  // Replace 'index' template with 'static/home'
  _.extend(Router.routes.index.options, {

    template: 'homepage',

    onBeforeAction: function() {
      $('body').addClass('hide-header');
      this.next();
    },

    onStop: function() {
      $('body').removeClass('hide-header');
    },

    data: function() {
      console.log(home_slides.find().fetch());

      return {
        showTag: Tags.findOne({ _id: showTagId }),
        showProducts: Products.find({
          hashtags: showTagId
        }).fetch(),
				homeSlides: home_slides.find().fetch()
      };

    },

    // @TODO: get home slides from DB collection and send to template

		waitOn: function () {
      this.subscribe("home_slides", Session.get("productScrollLimit"));
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


  this.route('showing', {
      onBeforeAction: function() {
        $('body').addClass('hide-header');
        this.next();
      },

      onStop: function() {
        $('body').removeClass('hide-header');
      },
      data: function() {
        return {
          showTag: Tags.findOne({ _id: showTagId }),
          showProducts: Products.find({
            hashtags: showTagId
          }).fetch(),
  				// homeSlides: home_slides.find().fetch()
        };

    },
    path: '/showing',
    name: 'showing',
    template: 'showing',
    controller: ShopController,
    waitOn: function () {
      return this.subscribe("Products", Session.get("productScrollLimit"));
    }
  });


  return this.route("notFound", {
    path: "/(.*)"
  });

});
