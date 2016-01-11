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

Template.registerHelper( 'toTitleCase', function(string) {
	return toTitleCase( string );
});


/**
* Tag used for "Current Show" prints
*/
this.showTagId = 'tm6ZME5p8ze28yoe7'; // Hardcoded tag ID

Template.registerHelper( 'showTag', function() {
	return Tags.findOne({ _id: showTagId });
});


/**
* Returns the artist's name of a print
* @param printID - string
* @return string
*/
this.printsArtistName = function( printID ) {
	let print = Products.findOne({ _id: printID }),
		meta = print.metafields;

	for ( let i = 0; i < meta.length; i++ ) {
		if ( meta[i].key === 'Artist' ) {
			return meta[i].value;
		}
	}
};

Template.registerHelper( 'printsArtistName', function( printID ) {
	return printsArtistName( printID );
});


/**
* Returns the year print was created
* @param printID - string
* @param format - string
* @return string
*/
this.printYear = function( printID ) {
	let print = Products.findOne({ _id: printID });
	return moment(print.createdAt).format( 'YYYY' );
};

Template.registerHelper( 'printYear', function ( printID ) {
	return printYear( printID );
} );


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


Template.registerHelper( 'printsByArtist', function() {
	let artists = getArtistsNames(),
		prints = Products.find().fetch(),
		printsByArtist = [];

	for ( let i = 0; i < artists.length; i++ ) {
		let artist = artists[i];

		printsByArtist.push({
			name: artist,
			prints: []
		});

		for ( let j = 0; j < prints.length; j++ ) {
			let print = prints[j],
				fields = print.metafields;

			for ( let k = 0; k < fields.length; k++ ) {
				let field = fields[k];

				if ( field.key === 'Artist' && field.value === artist ) {
					printsByArtist[i].prints.push(print);
				}
			}
		}
	}

	return printsByArtist;
});
