app.controller('CommentController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	suggestions.success(function(data) {
		$scope.comments = data[$routeParams.index].comments;
	});

	$scope.newComment = {};

	$scope.addComment = function() {
		$scope.comments.push($scope.newComment);
		$scope.newComment = {};
	};
}]);