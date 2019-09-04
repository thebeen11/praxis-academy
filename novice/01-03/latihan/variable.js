//comment
// comment, digunakan untuk menonaktifkan satu baris program
 
/*  
 * multi-line comment, digunakan untuk menonaktifkan beberapa baris program
 */
 
/* You can't, however, /* nest comments */

//Declarations
var x =4 //digunakan untuk mendeklarasikan variable local dan global
let y =5 //digunakan untuk mendeklarasikan block-scope local variable
const z = 6 //digunakan untuk mendeklarasikan block-scope local variable

//Evaluating variables
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}

//Variable scope
if (true) {
    var scope = 5;
  }
  console.log(scope);  // x is 5

//Variable hoisting
var myvar = 'my value';
 
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

//Function hoisting
