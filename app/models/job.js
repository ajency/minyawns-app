exports.definition = {
	config: {
      //  "URL" : 'http://www.minyawns.ajency.in/wp-content/themes/minyawns/libs/job.php/fetchjobs?offset=0',
     //   "debug": 1, 
		adapter: {
			type: "restapi",
			collection_name: "job"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			url:function(){
				
				var Offset=_.size(this.models);
				console.log('The length::',_.size(this.models));
				return 'http://www.minyawns.ajency.in/wp-content/themes/minyawns/libs/job.php/fetchjobs?offset='+Offset;
			}
		});
		
		return Collection;
	}
};