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

  // Replace 'index' template with 'static/home'
  _.extend(Router.routes.index.options, {
    template: 'homepage',
    data: function() {
      const showTagId = '6SzYLFCbQvh7WduCy';

      return {
        showTag: Tags.findOne({ _id: showTagId }),
        showProducts: Products.find({
          hashtags: showTagId
        }).fetch()
      };
    },

  });

  return this.route("notFound", {
    path: "/(.*)"
  });
});
