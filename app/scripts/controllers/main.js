'use strict';

/**
 * @ngdoc function
 * @name domalaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the domalaApp
 */
angular.module('domalaApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.gotocalc = function(){
    	$location.path('/calc');
    }
  });
