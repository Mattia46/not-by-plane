notplaneapp.factory('factoryTLAName', ['$http', '$filter', function($http, $filter){

  return {
    query: function(itaTLA){
      searchArray = $filter('filter')(airportJSON, {"iata": itaTLA});
      if(searchArray.length ==+ 0){
        searchArray = [{"name": itaTLA, "city": "New", "country": "Station"}];
      }
      return searchArray;
    }
  };

}]);

