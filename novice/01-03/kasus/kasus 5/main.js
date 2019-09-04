function celsiusToFahrenheit(celsius) {
    var c = (celsius*9)/5 +32;
    console.log(celsius+ ' °C samadengan ' +c+ ' °F' );
}

celsiusToFahrenheit(5);

function fahrenheitToCelsius(fahrenheit) {
    var f = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit+ ' °F samadengan ' +f+ ' °C' );
}

fahrenheitToCelsius(41);
