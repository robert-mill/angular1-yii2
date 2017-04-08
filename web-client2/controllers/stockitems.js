'use strict';
spaApp_stockitems.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/stockitems/index', {
            templateUrl: 'views/stockitems/index.html',
            controller: 'index'
        })
        .when('/stockitems/create', {
            templateUrl: 'views/stockitems/create.html',
            controller: 'create',
            resolve: {
                book: function(services, $route){
                    return services.getBooks();
                }
            }
        })
        .when('/stockitems/update/:bookId', {
            templateUrl: 'views/stockitems/update.html',
            controller: 'update',
            resolve: {
                stockitems: function(services, $route){
                    var stockitemsId = $route.current.params.stockitemsId;
                    return services.getBook(stockitemsId);
                }
            }
        })
        .when('/stockitems/delete/:stockitemsId', {
            templateUrl: 'views/stockitems/index.html',
            controller: 'delete',
        })
        .otherwise({
            redirectTo: '/stockitems/index'
        });
}]);

spaApp_stockitems.controller('index', ['$scope', '$http', 'services',
    function($scope,$http,services) {
        $scope.message = 'Everyone come and see how good I look!';
        services.getStockitems().then(function(data){
            $scope.stockitems = data.data;
        });
        $scope.deleteStockitem = function(bookID) {
            if(confirm("Are you sure to delete stockitem number: " + stockitemID)==true && stockitemID>0){
                services.deleteStockitem(bookID);
                $route.reload();
            }
        };
    }])
    .controller('create', ['$scope', '$http', 'services','$location','book',
        function($scope,$http,services,$location,stockitem) {
            $scope.message = 'Look! I am an about page.';
            $scope.createBook = function(stockitem) {
                var results = services.createBook(stockitem);
            }
        }])
    .controller('update', ['$scope', '$http', '$routeParams', 'services','$location','stockitem',
        function($scope,$http,$routeParams,services,$location,stockitem) {
            $scope.message = 'Contact us! JK. This is just a demo.';
            var original = stockitem.data;
            $scope.stockitem = angular.copy(original);
            $scope.isClean = function() {
                return angular.equals(original, $scope.stockitem);
            }
            $scope.updateBook = function(stockitem) {
                var results = services.updateBook(stockitem);
            }
        }]);