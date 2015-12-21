app.controller('CommentController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	suggestions.success(function(data) {
		//get comments from the suggestion by index and sort them
		$scope.comments = data[$routeParams.index].comments;
		$scope.sortComments();
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
		$scope.sortComments();
	};

	$scope.sortComments = function() {
		//create a double array to store number of upvotes as the first item and comment object as the second item
		$scope.comments.sort(function(a, b) {
			//sort by the number of upvotes
			if (a.upvotes < b.upvotes) { return 1; }
			if (a.upvotes > b.upvotes) { return -1; }
			return 0;
		});
	};
}]);