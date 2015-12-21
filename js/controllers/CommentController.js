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
		var doubleArray = [];
		for (index in $scope.comments) {
			var upvoteCount = $scope.comments[index].upvotes;	//count the number of upvotes
			doubleArray.push([upvoteCount, $scope.comments[index]]);//push [upvotes, object] into double array
		}

		doubleArray.sort(function(a, b) {
			//sort by the number of upvotes
			if (a[0] < b[0]) { return -1; }
			if (a[0] > b[0]) { return 1; }
			return 0;
		});

		$scope.comments = [];	//empty the current comments
		for (var i = doubleArray.length - 1; i >= 0; i--) {
			//push it in the order of most upvotes
			$scope.comments.push(doubleArray[i][1]);
		}
	};
}]);