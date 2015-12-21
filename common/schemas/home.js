/**
* Home page schema
*/

HomeSlides = new SimpleSchema({
	"item" : {
		label: "Item",
		type: String
	},
	"title" : {
		label: "Title",
		type: String
	},
	"subtitle" : {
		label: "Subtitle",
		type: String
	},
	"strapline" : {
		label: "Strapline",
		type: String
	},
	"cta_link" : {
		label: "Call to action link",
		type: String,
		defaultValue: "#"
	},
	"cta_text" : {
		label: "Call to action text",
		type: String
	},
	"background_image" : {
		label: "Background image",
		type: String
	}
});
