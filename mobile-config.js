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
});

App.launchScreens({
	iphone: 'icons/10a-prints-logo.svg',
	iphone_2x: 'icons/10a-prints-logo.svg',
	iphone5: 'icons/10a-prints-logo.svg',
	iphone6: 'icons/10a-prints-logo.svg',
	iphone6p_portrait: 'icons/10a-prints-logo.svg',
	iphone6p_landscape: 'icons/10a-prints-logo.svg',
	ipad_portrait: 'icons/10a-prints-logo.svg',
	ipad_portrait_2x: 'icons/10a-prints-logo.svg',
	ipad_landscape: 'icons/10a-prints-logo.svg',
	ipad_landscape_2x: 'icons/10a-prints-logo.svg',
	android_ldpi_portrait: 'icons/10a-prints-logo.svg',
	android_ldpi_landscape: 'icons/10a-prints-logo.svg',
	android_mdpi_portrait: 'icons/10a-prints-logo.svg',
	android_mdpi_landscape: 'icons/10a-prints-logo.svg',
	android_hdpi_portrait: 'icons/10a-prints-logo.svg',
	android_hdpi_landscape: 'icons/10a-prints-logo.svg',
	android_xhdpi_portrait: 'icons/10a-prints-logo.svg',
	android_xhdpi_landscape: 'icons/10a-prints-logo.svg'
});

App.accessRule('*');
