'use strict';
spaApp_stockitem.factory("services", ['$http','$location','$route',
    function($http,$location,$route) {
        var obj = {};
        obj.getBooks = function(){
            return $http.get(serviceBase + 'stockitems');
        }
        obj.createBook = function (stockitem) {
            return $http.post( serviceBase + 'stockitems', stockitem )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/stockitem/index');
            }
            function errorHandler( result ){
                alert("Error data")
                $location.path('/stockitem/create')
            }
        };
        obj.getBook = function(stockitemID){
            return $http.get(serviceBase + 'stockitems/' + stockitemID);
        }

        obj.updateBook = function (stockitem) {
            return $http.put(serviceBase + 'stockitems/' + stockitem.id, stockitem )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/stockitem/index');
            }
            function errorHandler( result ){
                alert("Error data")
                $location.path('/stockitem/update/' + stockitem.id)
            }
        };
        obj.deleteBook = function (stockitemID) {
            return $http.delete(serviceBase + 'stockitems/' + stockitemID)
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $route.reload();
            }
            function errorHandler( result ){
                alert("Error data")
                $route.reload();
            }
        };
        return obj;
    }]);