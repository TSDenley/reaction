/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

let staticPages = [ 'showing', 'prints', 'artists' ];


// let ShopController = RouteController.extend({
//   onAfterAction: function () {
//     return ReactionCore.MetaData.refresh(this.route, this.params);
//   },
//   yieldTemplates: {
//     layoutHeader: {
//       to: "layoutHeader"
//     },
//     layoutFooter: {
//       to: "layoutFooter"
//     },
//     dashboard: {
//       to: "dashboard"
//     }
//   }
// });
//
// this.ShopController = ShopController;


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

  _.extend(Router.routes.index.options, {
    template: 'home'
  });


  return this.route("notFound", {
    path: "/(.*)"
  });
});
