notplaneapp.controller('noPlaneController',['$http', '$filter', 'outBound', 'inBound','StringDate','factoryTLAName', '$location', '$scope', function($http, $filter, outBound, inBound, StringDate, factoryTLAName, $location, $scope) {

  var self = this;
  self.planeChecked = true;
  self.trainChecked = true;

  self.showFlight = function(item) {
    $location.path('/flight/' + item);
  };

  self.doOutbound = function() {
    var startLoc = self.selectedAirportFrom['iata']
    var endLoc = self.selectedAirportTo['iata']

    startDate = StringDate.convertEndDate(self.startingDate);
    outBound.query(startLoc, endLoc, startDate)
    .then(function(response) {
      self.searchResult = response.data;
      self.doNameLookup(self.searchResult.results);
    });
  };

  self.doInbound = function() {
    var startLoc = self.selectedAirportFrom['iata']
    var endLoc = self.selectedAirportTo['iata']

    endDate = StringDate.convertEndDate(self.endingDate);
    inBound.query(startLoc, endLoc, endDate)
    .then(function(response) {
      self.searchResult2 = response.data;
      self.doNameLookup(self.searchResult2.results);
    });
  };

  var airports = new Bloodhound({
  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.name);},
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: newairports
});

airports.initialize();

$scope.airportsDataset = {
  displayKey: 'name',
  limit: 15,
  source: airports.ttAdapter()
};

$scope.exampleOptionsNonEditable = {
  highlight: true,
  editable: false
};

self.searchs = function(){
  self.doOutbound();
  self.doInbound();
};

self.isTrainJourney = function(data) {
  return (data==='TRS' || data==='TRN');
};

self.doName = function(itaTLA) {
  return factoryTLAName.query(itaTLA);
};

self.doNameLookup = function(aryItems) {
  aryItems.forEach(function(item) {
    console.log(item);
    var test = self.doName(item.itineraries[0].outbound.flights[0].origin.airport);
    var test2 = self.doName(item.itineraries[0].outbound.flights[0].destination.airport);
    item.itineraries[0].outbound.flights[0].origin.airport = test[0].name +", " +  test[0].city;
    item.itineraries[0].outbound.flights[0].destination.airport = test2[0].name +", " +  test2[0].city;
  });
};

  }]);
