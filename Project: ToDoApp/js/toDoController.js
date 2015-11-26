var myApp = angular.module('myApp', []);

myApp.controller('TodoCtrl', ['$scope', function($scope){

	// List of to do items. List must be looped through to display each item on the screen.
	$scope.toDos = [

		{text: 'Learn Angular JS', done:false},
		{text: 'Learn JavaScript', done:false}

	];

	// Function 1 - Get toDos length
	$scope.getTotalToDos = function(){

		return $scope.toDos.length;

	};

	// Function 2 - Access the toDo array
	$scope.clearCompleted = function(){

		//function doesn't work//solution-added underscoreJS. it has the '_.filter' function. Worked.
		$scope.toDos = _.filter($scope.toDos, function(toDo){

			return !toDo.done;

		});


	}

	// Function 3 - display user input onto the screen as soon as the user clicks the add button
	$scope.addToDo = function(){

		$scope.toDos.push({text:$scope.formToDoText, done:false});
		$scope.formToDoText = '';
		//alert('hello');
	}

}]);// end of toDoController
