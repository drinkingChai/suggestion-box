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
		$scope.newSuggestion = {};	//clear the form
	};

	$scope.upVote = function(index) {
		//increment upvote by 1 and sort suggestions by upvote
		$scope.suggestions[index].upvotes += 1;
		$scope.sortSuggestions();
	};

	$scope.sortSuggestions = function() {
		//sort suggestion by upvotes
		var doubleArray = [];	//create double array to store number of upvotes as the first item and the object as a second item
		for (index in $scope.suggestions) {
			var upvoteCount = $scope.suggestions[index].upvotes;	//count the number of upvotes
			doubleArray.push([upvoteCount, $scope.suggestions[index]]);	//push [upvotes, object] into the double array
		}

		doubleArray.sort(function(a, b) {
			//sort by the number of upvotes
			if (a[0] < b[0]) { return -1; }
			if (a[0] > b[0]) { return 1; }
			return 0;
		});

		$scope.suggestions = [];	//clear out suggestions
		for (var i = doubleArray.length - 1; i >= 0; i--) {
			//push it in the order of most upvoted
			$scope.suggestions.push(doubleArray[i][1]);
		}
	};
}]);