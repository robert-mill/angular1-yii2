'use strict';
spaApp_book.config(['$routeProvider',  function($routeProvider) {
  $routeProvider
	.when('/register', {
		templateUrl: 'views/book/index.html',
		controller: 'index'
	})
	.when('/book/create', {
		templateUrl: 'views/book/create.html',
		controller: 'create',
		resolve: {
			book: function(services, $route){
				return services.getBooks();
			}
        }
	})
	.when('/book/update/:bookId', {
		templateUrl: 'views/book/update.html',
		controller: 'update',
		resolve: {
          book: function(services, $route){
            var bookId = $route.current.params.bookId;
            return services.getBook(bookId);
          }
        }
	})
	.when('/book/category:category', {
		templateUrl: 'views/book/index.html',
		controller: 'category'
	})
	.when('/book/delete/:bookId', {
		templateUrl: 'views/book/index.html',
		controller: 'delete',
	})
	.otherwise({
		redirectTo: '/book/index'
	});
}]);



spaApp_book.controller('index', ['$scope', '$http', 'services',
	function($scope,$http,services) {
	$scope.message = 'Everyone come and see how good I look!';
	services.getBooks().then(function(data){
        $scope.book = data.data;
    });	
	$scope.deleteBook = function(bookID) {
		if(confirm("Are you sure to delete book number: " + bookID)==true && bookID>0){
			services.deleteBook(bookID);	
			$route.reload();
		}
	};

}])

.controller('category', ['$scope', '$http',   function($scope,$http) {
    // create a message to display in our view
        var res = getUrlParams();
    $http({
        url: 'http://localhost/rosemary080417/web-service/web/stockitems?category='+res,
    }) .then(function (response) {
        $scope.pageheading = res;
        $scope.message = response.data;
    });
    var addToCart = function(){
        $scope.cartitemiterator = [{car:'red'}];
    }
}])




    .controller('category_hold', ['$scope', '$http', function($scope,$http) {
        var res = getUrlParams();
        $http.get('http://localhost/rosemary080417/web-service/web/stockitems/'+res)
            .then(function (response) {
                $scope.pageheading = res;
                $scope.message = response.data;
            })


    }])

.controller('create', ['$scope', '$http', 'services','$location','book', 
	function($scope,$http,services,$location,book) {
	$scope.message = 'Look! I am an about page.';
	$scope.createBook = function(book) {
        var results = services.createBook(book);
    }  
}])
.controller('update', ['$scope', '$http', '$routeParams', 'services','$location','book', 
	function($scope,$http,$routeParams,services,$location,book) {
	$scope.message = 'Contact us! JK. This is just a demo.';
	var original = book.data;
	$scope.book = angular.copy(original);
	$scope.isClean = function() {
		return angular.equals(original, $scope.book);
	}
	$scope.updateBook = function(book) {	
        var results = services.updateBook(book);
    } 
}]);

function getUrlParams() {
    var query =  window.location.href;
    var url = query.split(":");

return url[2];
}