/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

// const staticPages = [ 'artists' ];

Router.map(function route() {

  // for (let page of staticPages) {
  //   this.route(page, {
  //     controller: ShopController,
  //     name: page
  //   });
  // }


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
		waitOn() {
      this.subscribe("home_slides");
      this.subscribe("Products", 999);
    }
  });


  /**
  * Extend single 'product' route to subscribe to all products
  * to allow finding of linked products
  */
	_.extend(Router.routes.product.options, {
		subscriptions() {
			this.subscribe("Product", this.params._id);
      this.subscribe("Products", 999);
		}
	});


  this.route('prints', {
    path: '/prints',
    name: 'prints',
    template: "products",
    controller: ShopController,
    waitOn() {
      return this.subscribe("Products", 999);
    }
  });


  this.route('showing', {
		path: '/showing',
		name: 'showing',
		template: 'showing',
		controller: ShopController,
    waitOn() {
      return this.subscribe("Products", 999);
    }
  });


  this.route( 'artists', {
    path: '/artists',
    template: 'artists',
    controller: ShopController,
    waitOn() {
      return this.subscribe("Products", 999);
    }
  });


  return this.route("notFound", {
    path: "/(.*)"
  });

});
