function getDay(day) {
    day = day - 1; // Adjust month number for array index (1 = senin, 7 = minggu)
    var days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
    if (days[day]) {
      return days[day];
    } else {
      throw 'InvalidDay'; //throw keyword is used here
    }
  }
  
  try { // statements to try
    monthName = getDay(myDay); // function could throw exception
  }
  catch (e) {
    dayName = 'unknown';
    logMyErrors(e); // pass exception object to error handler -> your own function
  }