this.toTitleCase = function (str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

this.showTagId = 'tm6ZME5p8ze28yoe7'; // Hardcoded tag ID

this.showTag = function() {
	return Tags.findOne({ _id: showTagId });
};
