var myApp = angular.module('myApp', []);

myApp.controller('staffCtrl', ['$scope', function($scope){

	$scope.staffMembers = [

{'name' : 'Veronica Goei', 'jobTitle' : 'Executive Director', 'phone' : '222-222-2222 ext. 222', 'email' : 'vgoei@email.com', 'description' : 'Veronica came to GFS as the Executive Director in early 2000. She is a leader in the non-profit sector with more than 18 years of experience. Under her leadership GFS has developed expertise in early childhood literacy and in working with Latino families. She has developed curricula in the areas of parenting, diversity, early childhood literacy, and adult education. Some of her curricula is currently being implemented at the local, state and nationwide level.', "imageUrl": "images/staff/Veronica_Goei.jpg"},
		

{'name' : 'Gabriela Alvarado', 'jobTitle' : 'Family Literacy Coordinator', 'phone' : '222-222-2222 ext. 222', 'email' : 'galvarado@email.com', 'description' : 'Gabriela coordinates the Family Literacy programs at GFS. She works with the Yes We Can…Read! Reading Mentoring program for K-3rd grade students and facilitates the Yes We Can…Read! Parent Engagement classes for parents at the local elementary schools.', "imageUrl": "images/staff/Gabriela_Alvarado.jpg"},


{'name' : 'Jessica Cruz', 'jobTitle' : 'Office Manger', 'phone' : '222-222-2222 ext. 222', 'email' : 'jcruz@email.com', 'description' : 'Jessica provides administrative support to staff. Her past employment includes mortgage loan processing and managing an insurance office. Jessica is an East San José native. She is married and has two children.', "imageUrl": "images/staff/Jessica _Cruz.jpg"}

	];// end of employees array
	
}]);// end of staffController
