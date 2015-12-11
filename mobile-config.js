/**
* mobile-config.js
* @url: http://docs.meteor.com/#/full/mobileconfigjs
*/

App.info({
	id: 'com.10adigital.uk', // Need to be a specfic ID?
	name: '10A Digital',
	description: '10A Digital Prints',
	author: '10A Digital',
	email: 'info@10adigital.uk',
	website: 'http://10adigital.uk'
});

App.icons({
	iphone: 'icons/10a-prints-logo.svg',
	iphone_2x: 'icons/10a-prints-logo.svg',
	iphone_3x: 'icons/10a-prints-logo.svg',
	ipad: 'icons/10a-prints-logo.svg',
	ipad_2x: 'icons/10a-prints-logo.svg',
	android_ldpi: 'icons/10a-prints-logo.svg',
	android_mdpi: 'icons/10a-prints-logo.svg',
	android_hdpi: 'icons/10a-prints-logo.svg',
	android_xhdpi: 'icons/10a-prints-logo.svg'
})

App.accessRule('*');
