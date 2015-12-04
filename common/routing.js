/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

let staticPages = [ 'showing', 'prints', 'artists' ];

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

  // TODO: replace home route
	// this.route("home", {
  //   controller: ShopController,
  //   path: "/",
  //   name: "home",
  //   template: "products",
	// 	data: {
	// 		test: true
	// 	},
  //   waitOn: function () {
  //     return this.subscribe("Products", Session.get("productScrollLimit"));
  //     console.log(this.data);
  //   }
  // });

  return this.route("notFound", {
    path: "/(.*)"
  });
});
