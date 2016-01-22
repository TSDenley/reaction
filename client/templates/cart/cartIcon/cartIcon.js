Template.newCartIcon.replaces('cartIcon');

/**
* Add scroll to top when opening cart
*/
Template.cartIcon.events({
  "click .show-cart": function () {
		$('html, body').animate({ scrollTop : 0 }, 200);
  }
});
