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
				return meta[i].value;
			}
		}
	}));
};


this.getPrintsByArtist = function() {
	let artists = getArtistsNames(),
		prints = Products.find().fetch(),
		printsByArtist = {};

	for (let i = 0; i < artists.length; i++) {
		let artist = artists[i];

		printsByArtist[artist] = [];

		for (let j = 0; j < prints.length; j++) {
			let print = prints[j],
				fields = print.metafields;

			for (let k = 0; k < fields.length; k++) {
				let field = fields[k];

				if ( field.key === 'Artist' && field.value === artist ) {
					printsByArtist[artist].push(print);
				}
			}
		}
	}

	return printsByArtist;
};
