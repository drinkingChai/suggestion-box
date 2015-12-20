//home controller placeholder
app.controller('HomeController', ['$scope', '$http', 'suggestions', function($scope, $http, suggestions) {
	suggestions.success(function(data) {
		$scope.suggestions = data;
	});

	$scope.newSuggestion = {
		upvotes: 0,
		comments: []
	};

	$scope.addSuggestion = function() {
		$scope.newSuggestion.date = Date.now();
		$scope.suggestions.push($scope.newSuggestion);
		$scope.newSuggestion = {};
	};

	$scope.upVote = function(index) {
		$scope.suggestions[index].upvotes += 1;
		$scope.sortSuggestions();
	};

	$scope.sortSuggestions = function() {
		var doubleArray = [];
		for (index in $scope.suggestions) {
			var upvoteCount = $scope.suggestions[index].upvotes;
			doubleArray.push([upvoteCount, $scope.suggestions[index]]);
		}

		doubleArray.sort(function(a, b) {
			if (a[0] < b[0]) { return -1; }
			if (a[0] > b[0]) { return 1; }
			return 0;
		});

		$scope.suggestions = [];
		for (var i = doubleArray.length - 1; i >= 0; i--) {
			$scope.suggestions.push(doubleArray[i][1]);
		}
	};
}]);