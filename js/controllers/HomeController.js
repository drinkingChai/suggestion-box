//home controller placeholder
app.controller('HomeController', ['$scope', '$http', 'suggestions', function($scope, $http, suggestions) {
	suggestions.success(function(data) {
		$scope.suggestions = data;
	});

	$scope.newSuggestion = {};

	$scope.addSuggestion = function() {
		$scope.suggestions.push($scope.newSuggestion);
		$scope.newSuggestion = {};
	};

	$scope.upVote = function(index) {
	};

	$scope.downVote = function(index) {
		return;
	};
}]);