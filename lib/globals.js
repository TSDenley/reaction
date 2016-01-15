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
* Randomise array order
* @param array
* @return shuffed array
*/
this.shuffleArray = function (array) {
    for ( let i = array.length - 1; i > 0; i-- ) {
        let j = Math.floor(Math.random() * (i + 1)),
	    	temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


/**
* Template data context debugger
*/
Template.registerHelper( 'log', function ( label ) {
	if ( label === undefined || label === null ) {
		label = '';
	}
	console.log(label, this);
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


/**
* Get prints sorted my artist
* @param limit - number - optional
* @return array
*/
Template.registerHelper( 'printsByArtist', function( limit ) {

	let artists = getArtistsNames(),
		prints = Products.find().fetch(),
		printsByArtist = [];

	// Loop through each artist and create an object to hold name and prints
	for ( let i = 0; i < artists.length; i++ ) {
		let artist = artists[i];

		printsByArtist.push({
			name: artist,
			prints: []
		});

		// Loop through each print
		for ( let j = 0; j < prints.length; j++ ) {
			let print = prints[j],
				fields = print.metafields;

			// Loop through each "metefield" for each print
			for ( let k = 0; k < fields.length; k++ ) {
				let field = fields[k];

				// If this "metefield" has a key of "Artist" & a value that
				// matches the current artist
				if ( field.key === 'Artist' && field.value === artist ) {

					// If a limit was given, and is a valid number, stop
					// adding prints after the limit is excided
					if ( _.isNumber( limit ) && !_.isNaN( limit ) ) {
						if ( printsByArtist[i].prints.length >= limit ) {
							break;
						}
					}

					// Add this print to this artist's prints array
					printsByArtist[i].prints.push(print);
				}
			}
		}
	}

	return printsByArtist;
});
