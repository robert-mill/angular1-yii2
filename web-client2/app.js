'use strict';
var serviceBase = 'http://127.0.0.1/angular/app6/web-service/web/'
// Declare app level module which depends on views, and components
var spaApp = angular.module('spaApp', [
  'ngRoute',
  'spaApp.site',
  'spaApp.book',
  'ngAnimate',
  'angular.filter'
]);
var spaApp_site = angular.module('spaApp.site', ['ngRoute'])
var spaApp_book = angular.module('spaApp.book', ['ngRoute']);
var spaApp_stockitems = angular.module('spaApp.stockitems', ['ngRoute','angular.filter']);
spaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/site/index'});
}]);