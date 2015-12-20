app.controller('CommentController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	suggestions.success(function(data) {
		$scope.suggestion = data[$routeParams.index];
		$scope.comments = data[$routeParams.index].comments;
	});

	$scope.newComment = {
		upvotes: 0
	};

	$scope.addComment = function() {
		$scope.comments.push($scope.newComment);
		$scope.newComment = {};
	};

	$scope.upVote = function(index) {
		$scope.comments[index].upvotes += 1;
		$scope.sortComments();
	};

	$scope.sortComments = function() {
		var doubleArray = [];
		for (index in $scope.comments) {
			var upvoteCount = $scope.comments[index].upvotes;
			doubleArray.push([upvoteCount, $scope.comments[index]]);
		}

		doubleArray.sort(function(a, b) {
			if (a[0] < b[0]) { return -1; }
			if (a[0] > b[0]) { return 1; }
			return 0;
		});

		$scope.comments = [];
		for (var i = doubleArray.length - 1; i >= 0; i--) {
			$scope.comments.push(doubleArray[i][1]);
		}
	};
}]);