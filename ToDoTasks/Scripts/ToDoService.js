'use strict'

toDoApp.factory('toDoService', function ($http,$q) {
    return {
        get: function () {
            var deferred = $q.defer();
            $http({ method: 'GET', url: '/Home/Tasks' }).
            success(deferred.resolve).
            error(deferred.reject);
            return deferred.promise;
        }
    }
});