app.factory('forecast', ['$http', function($http) { 
  return $http.get('js/json/forecast.json') 
    .success(function(data) { 
      return data; 
    }) 
    .error(function(err) { 
      return err; 
    }); 
}]);
