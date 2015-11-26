var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {

		url: '/home',
		templateUrl: 'partials/home.html',
		//controller: 'homeController'

	})

	.state('about', {

		url: '/about',
		templateUrl: 'partials/about.html',
		//controller: 'aboutController'
	})

	.state('contact', {

		url: '/contact',
		templateUrl: 'partials/contact.html',
		//controller: 'contactController'
	})


})


