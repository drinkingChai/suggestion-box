app.controller('CommentController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	suggestions.appData.success(function(data) {
		//get comments from the suggestion by index and sort them
		$scope.comments = data[$routeParams.index].comments;
		suggestions.sortByUpvotes($scope.comments);
	});

	$scope.newComment = {
		//empty object for new comment
		upvotes: 0
	};

	$scope.addComment = function() {
		//add new comment and empty the form
		$scope.comments.push($scope.newComment);
		$scope.newComment = {
			upvotes: 0
		};
	};

	$scope.upVote = function(index) {
		//increment upvotes by 1 and increment comments
		$scope.comments[index].upvotes += 1;
		suggestions.sortByUpvotes($scope.comments);
	};
}]);