notplaneapp.factory('StringDate',function(){

  return {
    convertEndDate: function(newDate){

      year = newDate.getFullYear();
      month = (newDate.getMonth())+1;
      day = newDate.getDate();
      day < 10 ? self.correctDate() : day;
      month < 10 ? self.correctMonth() : month;
      convertedDate = year + '-' + month + '-' + day;
      return convertedDate;
    }
  };
});

  self.correctDate = function(){
    DayString = day.toString();
    day = '0' + DayString;
    };

  self.correctMonth = function(){
    monthString = month.toString();
    month = '0' + monthString;
    };
