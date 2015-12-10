var newairports = [];
airportJSON.forEach(function(item){
    if (item.iata !== "") {
      newairports.push({
        name: item.city + ' ' + item.name + ' ' + item.iata,
        iata: item.iata
      });
    }
});
// console.log(newarray)
