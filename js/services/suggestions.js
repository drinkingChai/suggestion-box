//placeholder for comment service
app.factory('suggestions', ['$http', function($http) {
	return $http.get('data/suggestions.json')
		.success(function(data) {
			return data;
		});
}]);