notplaneapp.factory('inBound', ['$http', function($http){

  var baseUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';

  return {
    query: function(startLoc, endLoc, endDate){
      return $http({
        url: baseUrl,
        method: 'GET',
        params: {
          'apikey': token,
          'origin': endLoc,
          'destination': startLoc,
          'departure_date': endDate,
          'currency': 'GBP',
          'direct': true
        }
      });
    }
  };

}]);
