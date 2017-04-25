'use strict';
spaApp_members.config(['$routeProvider',  function($routeProvider) {
  $routeProvider
	.when('/member/index', {
		templateUrl: 'views/member/index.html',
		controller: 'index'
	})
	.when('/member/create', {
		templateUrl: 'views/member/create.html',
		controller: 'create',
		resolve: {
            member: function(services, $route){
				return services.getMembers();
			}
        }
	})
	.when('/member/update/:MemberId', {
		templateUrl: 'views/member/update.html',
		controller: 'update',
		resolve: {
            member: function(services, $route){
            var memberId = $route.current.params.memberId;
            return services.getMember(memberId);
          }
        }
	})

	.otherwise({
		redirectTo: '/member/index'
	});
}]);



spaApp_members.controller('index', ['$scope', '$http', 'services', 'UserReg',

	function($scope,$http,services, UserReg) {

        $scope.registerUser = function ($http) {
           UserReg.AddMemberToDb($scope.user);
        }

	$scope.message = 'Everyone come and see how good I look!';
	services.getMembers().then(function(data){
        $scope.member = data.data;
    });


}]).factory("UserReg", ['$http', function ($http) {
	var fac = {};
	fac.AddMemberToDb = function (user) {
		alert(555);
		$http.post("http://localhost/rosemary080417/web-service/web/members",user).success(function (response) {
			alert(345345);
        });
    }
    return fac;
}])




.controller('create', ['$scope', '$http', 'services','$location','member',
	function($scope,$http,services,$location,member) {
	$scope.message = 'Look! I am an member page.';
	$scope.createMember = function(member) {
        var results = services.createMember(member);
    }  
}])


function getUrlParams() {
    var query =  window.location.href;
    var url = query.split(":");

return url[2];
}