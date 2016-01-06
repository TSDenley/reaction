/**
 * Misc. App. Configuration
 *
 * A place to put misc. package configurations
 */
Avatar.setOptions({
  defaultImageUrl: "https://raw.githubusercontent.com/reactioncommerce/reaction/development/public/resources/avatar.gif",
  fallbackType: "image",
  cssClassPrefix: "reactionAvatar"
});
// client configuration
if (Meteor.isClient) {
  ITEMS_INCREMENT = 10;
  // sets default number of product displayed on a grid
  Session.setDefault("productScrollLimit", ITEMS_INCREMENT);
}


this.toTitleCase = function (str) {
  return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
