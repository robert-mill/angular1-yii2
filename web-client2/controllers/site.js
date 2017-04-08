'use strict';
spaApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/site/index', {
		templateUrl: 'views/site/index.html',
		controller: 'stockitems'
	})
	.when('/site/about', {
		templateUrl: 'views/site/about.html',
		controller: 'about'
	})
	.when('/site/contact', {
		templateUrl: 'views/site/contact.html',
		controller: 'contact'
	})
    .when('/site/stockitems', {
        templateUrl: 'views/site/stock-items.php',
        controller: 'stockitems'
    })
	.otherwise({
		redirectTo: '/site/index'
	});
}])
.controller('index', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
    $http.get('http://localhost/rosemary080417/web-service/web/stockitems?_format=json')
        .then(function (response) {
            $scope.message = response.data;
        })
}])
.controller('about', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Look! I am an about page.';
}])
.controller('contact', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Contact us! JK. This is just a demo.';
}])
.controller('stockitems', ['$scope', '$http', function($scope,$http) {
    // create a message to display in our view
	$http.get('http://localhost/rosemary080417/web-service/web/stockitems?_format=json')
		.then(function (response) {
            $scope.message = response.data;
        })

}]);