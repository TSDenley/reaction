/**
* Product variants
*/

// Override existing template
Template.newVariant.replaces('variant');


/**
* Helper methods
*/
Template.variant.helpers({

	/**
	* Change stock level "progress bar" class when stock level changes
	*/
	progressBar() {
		if ( this.inventoryPercentage <= 10 ) {
			return "progress-bar-danger";
		} else if ( this.inventoryPercentage <= 30 ) {
			return "progress-bar-warning";
		}

		return "progress-bar-info";
	}

});


/**
* Events
*/
Template.variant.events({

	// An event to test overriding events
	'click .test-event'() {
		alert('Test event!');
	}

});
