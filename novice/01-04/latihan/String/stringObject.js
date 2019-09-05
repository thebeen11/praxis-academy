const foo = new String('foo');      //membuat String object
console.log(foo);                   // Menampilkan: [String: 'foo']
typeof foo;                         // Returns 'object'


const firstString = '2 + 2';                // membuat String sebagai char
const secondString = new String('2 + 2');   // membuat String sebagai object
console.log(eval(firstString));             // eval(nama string) membaca kode sebagai aritmatik        
console.log(eval(secondString));            // Returns the string "2 + 2"

const hello = 'Hello, World!';
const helloLength = hello.length;
console.log(hello[0] = 'L');                 // This has no effect, because strings are immutable
console.log(hello[0]);                       // This returns "H"
console.log(hello);
