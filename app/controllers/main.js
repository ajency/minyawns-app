/*
* The menu view controller
*/

// create menu view
var data = [];

var v1 = Ti.UI.createView({
	height : '100%',
	width : '90%',
	left : '0%',
	backgroundColor : 'white'
});

$.drawermenu.drawermenuview.add(v1);

// Create an ImageView.
var anImageView = Ti.UI.createImageView({
	width : '10%',
	height : '10%',
	top : '2%',
	left : '2%',
	borderRadius : 15

});
anImageView.backgroundImage = '/15.jpg';

// Add to the parent view.
v1.add(anImageView);

/*
// Create a Button.
var aButton = Ti.UI.createButton({
height : '10%',
width : '10%',
top : '3%',
left : '2%',
backgroundImage:'/15.jpg',
borderRadius:'100%'
});

// Add to the parent view.
v1.add(aButton);
*/
// Create a Label.
var Name = Ti.UI.createLabel({
	text : Ti.App.Properties.getString('name'),
	color : '#A7ABB4',
	font : {
		fontSize : '14dp'
	},
	height : '10%',
	width : '65%',
	top : '1%',
	left : '17%',
	textAlign : 'left'
});

// Add to the parent view.
v1.add(Name);

// Create a Label.
var SubName = Ti.UI.createLabel({
	text : Ti.App.Properties.getString('role'),
	color : '#89D813',
	font : {
		fontSize : '12dp'
	},
	height : '10%',
	width : '50%',
	top : '5%',
	left : '17%',
	textAlign : 'left'
});

// Add to the parent view.
v1.add(SubName);

var separatorLine = Ti.UI.createView({
	height : '1dp',
	width : '100%',
	left : '0%',
	top : "12.8%",
	backgroundColor : '#E5E5E5'
});

v1.add(separatorLine);

var tableView = Ti.UI.createTableView({
	height : '100%',
	width : '100%',
	top : '13%',
	separatorColor : '#E5E5E5',
	backgroundColor : 'white',
	scrollable : false
});
v1.add(tableView);

/*
 * Table view creation
 */

var sectionBrowse = Ti.UI.createTableViewRow({
	height : '50dp',
	touchEnabled : false,
	width : '100%',
	backgroundColor : 'white'
});

var browseLabel = Ti.UI.createLabel({
	text : 'BROWSE',
	left : '2%',
	color : 'black',
	touchEnabled : false,
	font : {
		fontFamily : "OpenSans",
		fontWeight : 'bold',
		fontSize : '18dp'
	}
});

sectionBrowse.add(browseLabel);

var sectionAllJobs = Ti.UI.createTableViewRow({
	height : '50dp',
	touchEnabled : false,
	width : '100%',
	backgroundColor : 'white'
});

var allJobsLabel = Ti.UI.createLabel({
	text : 'ALL JOBS',
	left : '2%',
	color : '#A3A3A3',
	touchEnabled : false,
	font : {
		fontFamily : "OpenSans-Light",
		fontSize : '12dp'
	}
});

sectionAllJobs.add(allJobsLabel);

var sectionInformation = Ti.UI.createTableViewRow({
	height : '50dp',
	touchEnabled : false,
	width : '100%',
	backgroundColor : 'white'
});

var informationLabel = Ti.UI.createLabel({
	text : 'MINIONS DIRECTORY',
	left : '2%',
	color : '#A3A3A3',
	touchEnabled : false,
	font : {
		fontFamily : "OpenSans-Light",
		fontSize : '12dp'
	}
});

sectionInformation.add(informationLabel);

var sectionGear = Ti.UI.createTableViewRow({
	height : '50dp',
	width : '100%',
	touchEnabled : false,
	backgroundColor : 'white'
});

var gearLabel = Ti.UI.createLabel({
	text : 'BLOGS',
	left : '2%',
	color : '#A3A3A3',
	touchEnabled : false,
	font : {
		fontFamily : "OpenSans-Light",
		fontSize : '12dp'
	}
});

sectionGear.add(gearLabel);

var sectionTop = Ti.UI.createTableViewRow({
	height : '50dp',
	width : '100%',
	touchEnabled : false,
	backgroundColor : 'white'
});

var topLabel = Ti.UI.createLabel({
	text : 'MY JOBS',
	left : '2%',
	color : '#A3A3A3',
	touchEnabled : false,
	font : {
		fontFamily : "OpenSans-Light",
		fontSize : '12dp'
	}
});

sectionTop.add(topLabel);

var sectionLogout = Ti.UI.createTableViewRow({
	height : '50dp',
	width : '100%',
	touchEnabled : false,
	backgroundColor : 'white'
});

var logoutLabel = Ti.UI.createLabel({
	text : 'LOGOUT',
	left : '2%',
	color : '#A3A3A3',
	touchEnabled : false,
	font : {
		fontFamily : "OpenSans-Light",
		fontSize : '12dp'
	}
});

sectionLogout.add(logoutLabel);

data.push(sectionBrowse);
data.push(sectionAllJobs);
data.push(sectionInformation);
data.push(sectionGear);
data.push(sectionTop);
data.push(sectionLogout);

tableView.setData(data);

tableView.addEventListener('click', function(e) {
	if (e.row.children[0].text == 'ALL JOBS') {/*white*/
		//	var postScreen = Alloy.createController('postScreen').getView();
		var allJobsScreen = Alloy.createController('allJobsList').getView();
		$.drawermenu.drawermainview.add(allJobsScreen);
		$.drawermenu.showhidemenu();
	} else if (e.row.children[0].text == 'MINIONS DIRECTORY') {/*black*/
		
		
	} else if (e.row.children[0].text == 'Nothing') {
		$.drawermenu.showhidemenu();
	} else if (e.row.children[0].text == 'BLOGS') {/*yellow*/
		
		
	} else if (e.row.children[0].text == 'MY JOBS') {/*blue*/
		
		
	} else {
		$.drawermenu.showhidemenu();
	}
});

var allJobsScreen = Alloy.createController('allJobsList').getView();
$.drawermenu.drawermainview.add(allJobsScreen);

Ti.App.addEventListener('settingImg', function(data) {
	$.drawermenu.showhidemenu();
});

$.mainWindow.addEventListener('click', function(e) {
	if ($.drawermenu.getMenuOpen()) {
		Ti.API.info('enter2:', $.drawermenu.getMenuOpen());
		$.drawermenu.showhidemenu();

	};
});

$.drawermenu.drawermenuview.addEventListener('swipe', function() {
	$.drawermenu.showhidemenu();
});
$.mainWindow.open();

/*
 * To hide the action bar
 */
if (Titanium.Platform.name == 'android') {
	// Wait for the Window (or TabGroup) to render
	$.mainWindow.addEventListener('open', function() {
		// Grab the window's action bar instance and call the hide method
		$.mainWindow.activity.actionBar.hide();
	});
}
