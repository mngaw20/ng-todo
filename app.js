var app = angular.module('todoApp', []);

app.controller('mainController', ['$scope', function($scope) {

    $scope.formText = '';

    $scope.todos = [{text: 'Get Milk', completed: false}];

    $scope.todosLength = function() {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formText, completed: false});
        $scope.formText = '';
    };

    $scope.removeTodos = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if(!todo.completed) { $scope.todos.push(todo); }
        });
    };

}]);
