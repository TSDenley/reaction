/**
* mobile-config.js
* @url: http://docs.meteor.com/#/full/mobileconfigjs
*/

App.info({
	id: 'uk.tenadigital.prints.gallery',
	name: '10A Digital',
	version: '0.0.1',
	description: '10A Digital Prints',
	author: '10A Digital',
	email: 'info@10adigital.uk',
	website: 'http://10adigital.uk'
});

/**
* Icons & splashes generator script
* @url https://github.com/lpender/meteor-assets
*/

App.icons({
  "iphone": "resources/icons/iphone.png", // 60x60
  "iphone_2x": "resources/icons/iphone_2x.png", // 120x120
  "iphone_3x": "resources/icons/iphone_3x.png", // 180x180
  "ipad": "resources/icons/ipad.png", // 76x76
  "ipad_2x": "resources/icons/ipad_2x.png", // 152x152
  'android_ldpi': "resources/icons/android_ldpi.png", // 36x36
  'android_mdpi': "resources/icons/android_mdpi.png", // 48x48
  'android_hdpi': "resources/icons/android_hdpi.png", // 72x72
  'android_xhdpi': "resources/icons/android_xhdpi.png" // 96x96
});

App.launchScreens({
  "iphone": "resources/splashes/iphone.png", // 320x245
  "iphone_2x": "resources/splashes/iphone_2x.png", // 640x490
  "iphone5": "resources/splashes/iphone5.png", // 640x1136
  "iphone6": "resources/splashes/iphone6.png", // 750x1334
  "iphone6p_portrait": "resources/splashes/iphone6p_portrait.png", // 2208x1242
  "iphone6p_landscape": "resources/splashes/iphone6p_landscape.png",
  "ipad_portrait": "resources/splashes/ipad_portrait.png",
  "ipad_portrait_2x": "resources/splashes/ipad_portrait_2x.png",
  "ipad_landscape": "resources/splashes/ipad_landscape.png",
  "ipad_landscape_2x": "resources/splashes/ipad_landscape_2x.png",
  "android_ldpi_portrait": "resources/splashes/android_ldpi_portrait.png",
  "android_ldpi_landscape": "resources/splashes/android_ldpi_landscape.png",
  "android_mdpi_portrait": "resources/splashes/android_mdpi_portrait.png",
  "android_mdpi_landscape": "resources/splashes/android_mdpi_landscape.png",
  "android_hdpi_portrait": "resources/splashes/android_hdpi_portrait.png",
  "android_hdpi_landscape": "resources/splashes/android_hdpi_landscape.png",
  "android_xhdpi_portrait": "resources/splashes/android_xhdpi_portrait.png",
  "android_xhdpi_landscape": "resources/splashes/android_xhdpi_landscape.png"
});

App.accessRule('*');
