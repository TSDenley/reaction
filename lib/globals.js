/**
* Convert a string to "Title Case"
* @param str - string
* @return string
*/
this.toTitleCase = function (str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};


/**
* Tag used for "Current Show" prints
*/
this.showTagId = 'tm6ZME5p8ze28yoe7'; // Hardcoded tag ID

this.showTag = function() {
	return Tags.findOne({ _id: showTagId });
};


/**
* Get artist's names from print metadata
* @return array
*/
this.getArtistsNames = function() {
	let printsArray = Products.find().fetch();

	return _.uniq(printsArray.map(function(prints) {
		let meta = prints.metafields;
		for (let i = 0; i < meta.length; i++) {
			if ( meta[i].key === 'Artist' ) {
				return toTitleCase( meta[i].value );
			}
		}
	}));
};
