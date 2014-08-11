/*
 * This file displays all the jobs
 */
var args = arguments[0] || {};
var json;
var noOfItems;
console.log('Screen height:' + showView);

var api = {
	data : ("abcpq"),

	initialize : function() {
		if (args.pulltorefresh) {
			args.pulltorefresh.setCallback(this.doRefresh);
		}

		//   this.updateListView(api.data);
	},

	doRefresh : function(e) {
		// Call your updateListView function

		updateListView();

	},

	updateListView : function() {
		if (args.pulltorefresh && api.data) {
			args.pulltorefresh.stop(showView, 20);
		}

		console.log('UPDATE');
	}
};

api.initialize();

/*
 * When pull to refresh fired
 */
var updateListView = function() {
	jobCollection.reset();
//	hideFooter();
	if (args.pulltorefresh && api.data) {
		args.pulltorefresh.stop(showView, 20);
	}
	console.log('UPDATE CALLED');

	LO.show('Loading...', false);
	jobCollection.fetch({
		reset : false,
		unique : true,
		success : function(collection, response, options) {

			LO.hide();
			i = 1;
			showView = Titanium.Platform.displayCaps.platformHeight;
			args.pulltorefresh.stop(showView, 20);

			console.log(JSON.stringify(jobCollection));

			jobCollection.add(collection.models);
			console.log('print first');
			console.log(jobCollection.length);

			collection.each(function(oneModel) {

				setModelProperties(oneModel);
				displayStatus = jobsStatus(oneModel);
				

			});
			// Set the initial item threshold
			_.delay(function() {

				$.listView.setMarker({
					sectionIndex : 0,
					itemIndex : (_.size(collection.models) - 1 )
				});
			}, 100);

		},
		error : function(e) {
			console.log('wrong print:' + JSON.stringify(e));
		}
	});

};

/*
* Show and hide footer
*/
/*
var showFooter=function(){
$.listView.footerView.show();
};

var hideFooter=function(){
$.listView.footerView.hide();
};
*/

var applyUnapplyJob = Ti.Network.createHTTPClient();

/*
 * failed response
 */
applyUnapplyJob.onerror = function(e) {

	Ti.API.debug(e.error);

	alert('There was an error during the connection');
	Alloy.Globals.hideIndicator();
	//timeout : 1000,

};

/*
 * successful response
 */
applyUnapplyJob.onload = function() {

	
	console.log('json response:');
	Ti.API.info(this.responseText);
	Ti.API.info(JSON.stringify(jobmodel));
	
	if (json.success===1 && json.new_action==='unapply') {
		
		jobmodel.set('user_status','Applied');
		jobmodel.set('change_status','Unapply');
		
	//	jobCollection.trigger('change');
		LO.hide();
	}else if(json.success===1 && json.new_action==='apply'){
		
		jobmodel.set('user_status','Not Applied');
		jobmodel.set('change_status','Apply');
		
	//	jobCollection.trigger('change');
		LO.hide();
	}
    
};

//make requet
//getAllJobs.open('GET','http://www.minyawns.ajency.in/wp-content/themes/minyawns/libs/job.php/fetchjobs?offset=0');
//getAllJobs.send();
//var jobs = Alloy.Collections.job;

/*
 * data filter to show only
 * filtered results
 */

function filterFunction(collection) {
    return jobCollection.where({time_status:'Open'});
}


/*
 * Data transaform function
 * to format model attributes
 */
function transformFunction(model) {
	// Need to convert the model to a JSON object
	var transform = model.toJSON();
	transform.required_minyawns = 'Minyawns required:' + transform.required_minyawns;
	transform.job_start_time = transform.job_start_time + ' ' + transform.job_start_meridiem + ' to ' + transform.job_end_time + ' ' + transform.job_end_meridiem;
	transform.job_wages = '$' + transform.job_wages;
	//transform.statusLabel=jobsStatus(JSON.stringify(transform));
	return transform;
}


/*
 * Fetch all jobs when
 * controller is opened
 */
console.log('Collection SIZE::' + _.size(jobCollection.models));
if (_.isEmpty(jobCollection.models)) {

	LO.show('Loading...', false);
	//	hideFooter();
	jobCollection.fetch({
		reset : false,
		unique : true,
		success : function(collection, response, options) {

			LO.hide();
			//	console.log('First time');
			//	console.log(JSON.stringify(jobCollection));

			jobCollection.add(collection.models);
			console.log('print first');
			Ti.API.info(JSON.stringify(response));

		//	Ti.API.info('Job Status');
			collection.each(function(oneModel) {

				setModelProperties(oneModel);
				displayStatus = jobsStatus(oneModel);
				

			});

			// Set the initial item threshold
            /*
			_.delay(function() {

				$.listView.setMarker({
					sectionIndex : 0,
					itemIndex : (_.size(collection.models) - 1 )
				});
			}, 100);
			*/
			
			$.listView.setMarker({
				sectionIndex : 0,
				itemIndex : (_.size(collection.models) - 1 )
			});
            
		},
		error : function(e) {
			console.log('wrong print:' + JSON.stringify(e));
		}
	});
} else {
	jobCollection.trigger('change');
	Ti.API.info(JSON.stringify(jobCollection));
	args.pulltorefresh.stop(showView, 20);
}

$.listView.addEventListener('swipe',function(e){
	Ti.API.info('swipe');
	//$.listView.updateItemAt(e.itemIndex, 'Apply');
});

/*
 * Click on list View
 */
/*
$.listView.addEventListener('itemclick', function(e) {

	//	var item = $.section.getItemAt(e.itemIndex);
	console.log('The value is:', e.itemIndex);
	//	$.container1.close();
	//	$.container1 = null;
	
});
*/
/*
* List view set marker
*/

// Load more data and set a new threshold when item threshold is reached
$.listView.addEventListener('marker', function(e) {

	
	//   getAllJobs.open('GET','http://www.minyawns.ajency.in/wp-content/themes/minyawns/libs/job.php/fetchjobs?offset='+noOfItems);
	//   getAllJobs.send();
	//   noOfItems=noOfItems+5;
	//	showFooter();

	i = i + 1;
	console.log('marker event called');
	jobCollection.fetch({
		remove : false,
		add : true,
		reset : false,
		unique : true,
		success : function(collection, response, options) {

			//    hideFooter();
			if (response.length > 0) {
				showView = Titanium.Platform.displayCaps.platformHeight * i;
				args.pulltorefresh.stop(showView, 20);
			}
			jobCollection.add(collection.models);

		//	console.log('print second');
		//	Ti.API.info(JSON.stringify(response));
            
			var displayStatus;
			collection.each(function(oneModel) {

				setModelProperties(oneModel);
				displayStatus = jobsStatus(oneModel);
				
                
			});
           


			_.delay(function() {
				$.listView.setMarker({
					sectionIndex : 0,
					itemIndex : (_.size(collection.models) - 1 )
				});
			}, 300);

			//	jobCollection.trigger('change');
		},
		error : function(e) {
			console.log('wrong print:' + JSON.stringify(e));
		}
	});

});

function show(e){
	var action_type;
    jobmodel=jobCollection.at(e.itemIndex) ;
	
	Ti.API.info('Model:');
	Ti.API.info(jobmodel.get('change_status'));
	/*
	if(jobmodel.get('change_status')==='Apply'){
		console.log('in apply');
		LO.show('Updating...', false);
		applyUnapplyJob.open('POST','http://www.minyawns.ajency.in/wp-admin/admin-ajax.php?action=minyawn_job_apply');
		var jobid = {

				'job_id' : jobmodel.get('post_id')
				
			};
	 	
	//    applyUnapplyJob.send(jobid);
	    
	}else if(jobmodel.get('change_status')==='Unapply'){
		console.log('in unapply.....');
		LO.show('Updating...', false);
		applyUnapplyJob.open('POST','http://www.minyawns.ajency.in/wp-admin/admin-ajax.php?action=minyawn_job_unapply');
		var jobid = {

				'job_id' : jobmodel.get('post_id')
				
			};
	 	
	    
	}
	*/
	
	if(jobmodel.get('change_status')==='Apply' || jobmodel.get('change_status')==='Unapply'){
		LO.show('Updating...', false);
		
		if(jobmodel.get('change_status')==='Apply'){
			action_type='minyawn_job_apply';
		}else if(jobmodel.get('change_status')==='Unapply'){
			action_type='minyawn_job_unapply';
		}
		applyUnapplyJob.open('POST','http://www.minyawns.ajency.in/wp-admin/admin-ajax.php?action='+action_type);
		var jobid = {

				'job_id' : jobmodel.get('post_id')
				
			};
		applyUnapplyJob.send(jobid);
	}
 
}
/*
 * load more using the widget
 */

/*
 function myLoader(e) {

 console.log('My loader called');
 jobCollection.fetch({
 remove : false,
 add : true,
 reset : false,
 unique : true,
 success : function(collection, response, options) {

 if (response.length>0) {
 showView=Titanium.Platform.displayCaps.platformHeight*i;
 args.pulltorefresh.stop(showView+250, 20);
 jobCollection.add(collection.models);
 // 	Alloy.Globals.hideIndicator();
 console.log('print second');
 console.log('collection model size: ' + _.size(collection.models));
 console.log(JSON.stringify(collection));
 collection.each(function(oneModel) {

 console.log(oneModel.get('post_id'));
 });

 }else{
 e.done();
 }

 //	jobCollection.trigger('change');
 },
 error : function(e) {
 console.log('wrong print:' + JSON.stringify(e));
 }
 });

 }
 */

/*
 * Pull to refresh
 */
/*
 $.listView.addEventListener('pull', function(e) {
 console.log('pull');
 jobCollection.reset();

 jobCollection.fetch({
 remove : false,
 add : true,
 reset : false,
 unique : true,
 success : function(collection, response, options) {
 jobCollection.add(collection.models);
 // 	Alloy.Globals.hideIndicator();
 console.log('print second');
 console.log('collection model size: ' + _.size(collection.models));
 console.log(JSON.stringify(collection));
 collection.each(function(oneModel) {

 console.log(oneModel.get('post_id'));
 });

 //  console.log('collection size: '+_.size(collection));

 _.delay(function() {
 $.listView.setMarker({
 sectionIndex : 0,
 itemIndex : (_.size(collection.models) - 1)
 });
 }, 1000);
 },
 error : function(e) {
 console.log('wrong print:' + e.error);
 }
 });
 });
 */

/*
 * Set time,application
 * and user status
 */
function setModelProperties(args) {
	/*
	 * Check if job open or closed (Time status)
	 */
	if (args.get('todays_date_time') < args.get('job_end_date_time_check')) {
		args.set('time_status', 'Open');
	} else {
		args.set('time_status', 'Expired');
	}

	/*
	 * Check for Application status
	 * (Available/ Filled/ Hired)
	 */
	if (args.get('job_status') == 1) {
		args.set('application_status', 'Available');

	} else if (args.get('job_status') == 2) {
		args.set('application_status', 'Hired');

	} else if (args.get('job_status') == 3) {
		args.set('application_status', 'Filled');
	}

	/*
	 * Check for user status(Applied/ Hired/ Not applied)
	 */

	if (args.get('applied_user_id').length > 0) {//Check if applicants have applied

		for (var j = 0, len = args.get('applied_user_id').length; j < len; j++) {

			if (Ti.App.Properties.getInt('logged_in_user_id') == args.get('applied_user_id')[j]) {

				if (args.get('user_to_job_status')[j] == 'hired') {

					args.set('user_status', 'Hired');
				} else {

					args.set('user_status', 'Applied');
				}
				break;
			} else {

				args.set('user_status', 'Not Applied');
			}
		};

	} else {
		args.set('user_status', 'Not Applied');
	}
}

/*
 * Return the status of the job
 */
function jobsStatus(args) {
	switch(args.get('user_status')) {

	case 'Not Applied':
		switch(args.get('time_status')) {
		case 'Open':
			if (args.get('application_status') == 'Available') {
				args.set('change_status','Apply');
				args.set('status_of_job','Applications open'+args.get('days_to_job_expired')+'days to go');
				return 'Applications open'+args.get('days_to_job_expired')+'days to go'+'Apply';

			} else if (args.get('application_status') == 'Filled') {
				args.set('change_status','Find similar jobs');
				args.set('status_of_job','Max number applied');
				return 'Max number applied Find similar jobs';

			} else if (args.get('application_status') == 'Hired') {
				args.set('change_status','Find similar jobs');
				args.set('status_of_job','Minions selected'+args.get('days_to_job_expired')+'days to go');
				return 'Minions selected'+args.get('days_to_job_expired')+'days to go'+ 'Find similar jobs';
			}

			break;

		case 'Expired':
		    args.set('change_status','Find similar jobs');
		    args.set('status_of_job','Job Date Over');
			return 'Job Date Over Find similar jobs';
			break;
		}

		break;
	case 'Applied':
		switch(args.get('time_status')) {
		case 'Open':
			if (args.get('application_status') == 'Available') {
				args.set('change_status','Unapply');
				args.set('status_of_job','You have applied'+args.get('days_to_job_expired')+'days to go');
				return 'You have applied'+args.get('days_to_job_expired')+'days to go'+'Unapply';

			} else if (args.get('application_status') == 'Filled') {
				args.set('change_status','Unapply');
				args.set('status_of_job','You have applied'+args.get('days_to_job_expired')+'days to go');
				return 'You have applied'+args.get('days_to_job_expired')+'days to go'+'Unapply';

			} else if (args.get('application_status') == 'Hired') {
				args.set('change_status','Find similar jobs');
				args.set('status_of_job','Minions selected');
				return 'Minions selected Find similar jobs';
			}

			break;

		case 'Expired':
		   args.set('change_status','Find similar jobs');
		   args.set('status_of_job','Job Date Over');
			return 'Job Date Over Find similar jobs';
			break;
		}

		break;
	case 'Hired':
		switch(args.get('time_status')) {
		case 'Open':
			if (args.get('application_status') == 'Hired') {
				args.set('change_status','Find similar jobs');
				args.set('status_of_job','You have been Hired'+args.get('days_to_job_expired')+'days to go');
				return 'You have been Hired'+args.get('days_to_job_expired')+'days to go'+' Find Similar Jobs';

			}

			break;

		case 'Expired':
			args.set('change_status','Find similar jobs');
			args.set('status_of_job','Job Date Over');
			return 'Job Date Over Find similar jobs';
			break;
		}

		break;

	}
};



