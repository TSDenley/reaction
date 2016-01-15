/**
* Override header template. See `./header.html`
*/

Template.header.replaces('layoutHeader');
// Template.newHeaderBrand.replaces('headerBrand');

Template.layoutHeader.events({
	'click .back-button a': function() {
		history.back();
	}
});
