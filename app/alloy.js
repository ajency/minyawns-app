// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.Facebook = require('facebook');
var jobCollection = Alloy.Collections.instance('job');
var i=1;
var showView=Titanium.Platform.displayCaps.platformHeight;
var jobmodel;
/*
 * Activity Indicator widget
 */
var LO = Alloy.createWidget('com.caffeinalab.titanium.loader', {
    message: "Test",
    useImages: false
});

/*
 * Activity Indicator.
 */
var indWin = null;

Alloy.Globals.showIndicator = function() {
	try {
		if (indWin == null)
			indWin = Alloy.createController('indicator').getView();
		indWin.showIndicator();
	} catch(e) {
		Ti.API.info("Exception in opening indicator");
	}

};
// Function to hide Indicator

Alloy.Globals.hideIndicator = function() {
	try {

		if (indWin != null) {
			indWin.hideIndicator();
			indWin = null;
		}
	} catch(e) {
		Ti.API.info("Exception in hiding indicator");
	}

}; 