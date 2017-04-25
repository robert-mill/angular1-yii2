'use strict';
spaApp_members.config(['$routeProvider',  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/register/index.html',
        controller: 'create',
        resolve: {
            member: function(services, $route){
                return services.getMembers();
            }
        }
    })
}])
spaApp_members.controller('create', ['$scope', '$http', 'services','$location','member',
    function($scope,$http,services,$location,member) {
        $scope.messagedd = 'Look! I am an about page.';
        $scope.createMember = function(member) {
            var results = services.createMember(member);
        }
    }])

