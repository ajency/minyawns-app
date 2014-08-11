/*
* the first controller called after alloy.js
*
*/

/*
* Facebook login and logout
*/
// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
var facebook = Alloy.Globals.Facebook;
facebook.appid = '1440271799581640';
facebook.permissions = ['user_likes'];
//$.fbButton.style = facebook.BUTTON_STYLE_WIDE;

facebook.forceDialogAuth = false;

function fbLogin(e) {
	facebook.authorize();

}

facebook.addEventListener('login', function(e) {
	if (e.success) {
		Ti.API.info('The response is:');
		Ti.API.info(JSON.stringify(e));
		//	var myjobslist = Alloy.createController("myJobsList", {});
		//	myjobslist.getView().open();
		var main = Alloy.createController("main", {});
		main.getView().open();
	} else if (e.error) {
		alert(e.error);
	} else if (e.cancelled) {
		alert("Canceled");
	}
});

//facebook.authorize();

facebook.addEventListener('logout', function(e) {
	alert('Logged out');

	//kill all facebook cookies and its properties so that another user can login
	var url = 'https://login.facebook.com';
	var client = Titanium.Network.createHTTPClient();
	client.clearCookies(url);

	Ti.App.Properties.removeProperty('FBAccessToken');
	Ti.App.Properties.removeProperty('FBUserId');
	Ti.App.Properties.removeProperty('FBSessionExpires');
});

var sendit = Ti.Network.createHTTPClient();
var receivedcookie;

/*
 * failed response
 */
sendit.onerror = function(e) {
	Ti.API.debug(e.error);
	alert('There was an error during the connection');
	$.loginButton.enabled = true;
};

/*
 * successfull response
 */

sendit.onload = function() {

	var json = JSON.parse(this.responseText);
	console.log('json response:', json);

	/*
	 * Check if correct email/password entered
	 */
	if (json.success) {
	
        LO.hide();
        
		//parse data to be sent
		console.log('User ID is:::', json.userdata.user_id);

		var args = {

			idValue : json.userdata.user_id
		};
		/*
		 * save values
		 */
		Ti.App.Properties.setString('username', $.emailTextField.value);
		Ti.App.Properties.setInt('logged_in_user_id', json.userdata.user_id);
		Ti.App.Properties.setString('name', json.userdata.user_login);
		Ti.API.info('the role:::', json.userdata.user_role[0]);
		if (json.userdata.user_role[0] === 'minyawn') {
			Ti.App.Properties.setString('role', 'Minion');
		};
		/*
		//get the cookie value
		receivedcookie = this.getResponseHeader('Set-Cookie');
		var cookiePart1, cookiePart2;
		var split = receivedcookie.split(',');

		for (var i = 0, len = split.length - 1; i < len; i++) {

			cookiePart1 = split[0];
			cookiePart2 = split[1];
		};

		Ti.App.Properties.setObject('cookieinformation', cookiePart1 + "," + cookiePart2);

		if (!( typeof receivedcookie === 'undefined')) {

			
		}
		*/
        var main = Alloy.createController("main", {});
		main.getView().open();
		//	this.clearCookies("http://www.minyawns.ajency.in");
	} else {
	
	     LO.hide();
		alert('Invalid username/password');
		$.loginButton.enabled = true;
	}

};

/*
 *Textfield to retrieve the last value
 */
if (Ti.App.Properties.getString('username')) {
	$.emailTextField.value = Ti.App.Properties.getString('username');
	//	$.passwordTextfield.focus();
};

/*
 * login button click
 */

function loginButtonClicked(e) {
           /* 
           var main = Alloy.createController("main", {});
			main.getView().open();
			*/
	//check for empty email and password fields
	if ($.emailTextField.value != '' && $.passwordTextField.value != '') {

		//check for valid email
		if (!checkemail($.emailTextField.value)) {
			alert("Please enter a valid email");
		} else {

			//check for network
			if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {
				alert('No Connection');
			} else {
			
				LO.show('Loading...', false);
				
				$.loginButton.enabled = false;
				//make the request
				sendit.open('POST', 'http://www.minyawns.ajency.in/wp-admin/admin-ajax.php?action=popup_userlogin');
				var user = {

					'pdemail' : $.emailTextField.getValue(),
					'pdpass' : $.passwordTextField.getValue()

				};

				//   var obj=JSON.stringify(user);
				sendit.send(user);
			}

		}

	} else {
		alert("Username/Password are required");
		$.loginButton.enabled = true;
	}

}

/*
 * validation for email address
 */

function checkemail(emailAddress) {
	var str = emailAddress;
	var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (filter.test(str)) {
		testresults = true;
	} else {
		testresults = false;
	}
	return (testresults);
};

$.urlWindow.open();

/*
 * To hide the action bar
 */
if (Titanium.Platform.name == 'android') {
   // Wait for the Window (or TabGroup) to render
$.urlWindow.addEventListener('open', function(){
    // Grab the window's action bar instance and call the hide method
	$.urlWindow.activity.actionBar.hide();
});
}

