'use strict';

/**
 * @ngdoc overview
 * @name domalaApp
 * @description
 * # domalaApp
 *
 * Main module of the application.
 */
angular
  .module('domalaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/calc', {
        templateUrl: 'views/calc.html',
        controller: 'CalcCtrl',
        controllerAs: 'calc'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
