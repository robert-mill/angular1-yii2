'use strict';
var serviceBase = 'http://127.0.0.1/angular/app/web-service/web/'
// Declare app level module which depends on views, and components
var spaApp = angular.module('spaApp', [
  'ngRoute',
  'spaApp.site',
  'spaApp.book',
  'spaApp.controllers',
   'spaApp.members',
  'ngAnimate',
  'ngCart',
  'angular.filter'
]);
var spaApp_site = angular.module('spaApp.site', ['ngRoute'])
var spaApp_book = angular.module('spaApp.book', ['ngRoute']);
var spaApp_members = angular.module('spaApp.members', ['ngRoute']);

var spaApp_stockitems = angular.module('spaApp.stockitems', ['ngRoute','angular.filter']);
var spaApp_controllers = angular.module('spaApp.controllers', ['ngRoute']);
spaApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when("/register",{
      controller: 'index',
      templateUrl: 'register/index.html'
  }).otherwise({redirectTo: '/site/index'});
}]);