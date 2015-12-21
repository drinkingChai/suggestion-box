//placeholder for comment service
app.factory('suggestions', ['$http', function($http) {
	return {
		appData: $http.get('data/suggestions.json')
		.success(function(data) {
			return data;
		}),
		sortByUpvotes: function(data) {
			//sort suggestion by upvotes
			data.sort(function(a, b) {
				//sort by the number of upvotes
				if (a.upvotes < b.upvotes) { return 1; }
				if (a.upvotes > b.upvotes) { return -1; }
				return 0;
			});
		}
	}
}]);