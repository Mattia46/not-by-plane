notplaneapp.factory('outBound', ['$http', function($http){

  var baseUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';

  return {
    query: function(startLoc, endLoc, startDate){
      return $http({
        url: baseUrl,
        method: 'GET',
        params: {
          'apikey': token,
          'origin': startLoc,
          'destination': endLoc,
          'departure_date': startDate,
          'currency': 'GBP',
          'direct': true
        }
      });
    }
  };

}]);
