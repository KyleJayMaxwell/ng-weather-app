app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html'
    })
    .when('/denver', {
      templateUrl: 'templates/denver.html',
      controller: 'weatherController'
    })
    .when('/boulder', {
      templateUrl: 'templates/boulder.html',
      controller: 'weatherController'
    })
    .when('/fortcollins', {
      templateUrl: 'templates/fortcollins.html',
      controller: 'weatherController'
    })
    .otherwise('/')

});