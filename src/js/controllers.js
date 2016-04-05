app.controller('weatherController', ['$scope', '$http', '$location', function($scope, $http, $location){
  
  var city = $location.url().substring(1);
  $scope.city = city;

  // $http.get('https://google.com')
  // .then(function(results){
  //   console.log(results);
  // });

  $http({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+$scope.city+'&APPID=a3e8626d1faf563bfab26dc49ccde0c7&units=imperial'
  })
  .then(function(results){
    console.log(results);
    $scope.temp = results.data.main.temp;
  });


}]);