var notplaneapp = angular.module('notplaneapp', ['ngResource', 'siyfion.sfTypeahead', 'ngRoute']);

notplaneapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'not_by_plane.html',
    controller: 'noPlaneController'
    }).when('/flight/:id', {
      templateUrl: 'flight.html',
      controller: 'noPlaneController'
      }).otherwise({redirectTo: 'index.html'});

    }]);
