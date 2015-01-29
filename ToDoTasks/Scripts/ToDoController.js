'use strict';

toDoApp.controller('toDoCtrl', ['$scope','toDoService', function ($scope, toDoService) {
    toDoService.get().then(function (tasks) { $scope.tasks = tasks; });
    $scope.editedTodo = null;
$scope.addNewTask = function () {
    
    var newtask = {
        "isDone":false,
        "title" : ""
    }
        $scope.tasks.push(newtask);
};
$scope.deleteTask = function (task) {
    $scope.tasks = $scope.tasks.map(function (e) {
        if (e !== task) return e;
    });
}

$scope.editTodo = function (todo) {
    $scope.editedTodo = todo;
    // Clone the original todo to restore it on demand.
    $scope.originalTodo = angular.extend({}, todo);
};

}]);

