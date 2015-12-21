//home controller placeholder
app.controller('HomeController', ['$scope', '$http', 'suggestions', function($scope, $http, suggestions) {
	suggestions.success(function(data) {
		//get data from JSON and sort the suggestions
		$scope.suggestions = data;
		$scope.sortSuggestions();
	});

	$scope.newSuggestion = {
		//empty new suggestion object
		upvotes: 0,
		comments: []
	};

	$scope.addSuggestion = function() {
		//add a new suggestion
		$scope.newSuggestion.date = Date.now();	//log the current date
		$scope.suggestions.push($scope.newSuggestion);	//push the suggestion
		$scope.newSuggestion = {
			//clear the form
			upvotes: 0,
			comments: []
		};	
	};

	$scope.upVote = function(index) {
		//increment upvote by 1 and sort suggestions by upvote
		$scope.suggestions[index].upvotes += 1;
		$scope.sortSuggestions();
	};

	$scope.sortSuggestions = function() {
		//sort suggestion by upvotes
		$scope.suggestions.sort(function(a, b) {
			//sort by the number of upvotes
			if (a.upvotes < b.upvotes) { return 1; }
			if (a.upvotes > b.upvotes) { return -1; }
			return 0;
		});
	};
}]);