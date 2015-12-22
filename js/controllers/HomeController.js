//home controller placeholder
app.controller('HomeController', ['$scope', '$http', 'suggestions', function($scope, $http, suggestions) {
	suggestions.appData.success(function(data) {
		//get data from JSON and sort the suggestions
		$scope.suggestions = data;
		suggestions.sortByUpvotes($scope.suggestions);
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
		suggestions.sortByUpvotes($scope.suggestions);
	};
}]);