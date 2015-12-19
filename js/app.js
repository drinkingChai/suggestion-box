var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/main.html'
	})
	.when('/:index', {
		controller: 'CommentController',
		templateUrl: 'views/comment.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});