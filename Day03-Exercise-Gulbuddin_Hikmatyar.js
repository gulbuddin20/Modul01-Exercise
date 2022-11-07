// Multiplication table
let n = 9;
for (let i = 1; i <= 10; ++i)
    console.log(n + " x " +i + " = " + n * i);

//check string palindrome or not
var string = "Madam"
var removeChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
var checkP = removeChar.split('').reverse().join('');
if(removeChar === checkP){
  console.log(string + " merupakan Palindrome");
}else{
  console.log(string + " bukan Palindrome");
}

//convert cm to km
var cm = 250;
var km = cm / 10000;
console.log (km, "km");

//number as currency
let duit = 10000
console.log("Rp "  + duit.toLocaleString('id') + ",00" );

//Remove search string from a string
let nama = "Hello World";
nama = nama.replace("ell", "");
console.log(nama);

//write a code to reverse a string
var kata = "purwadhika";
var reverse_string = kata.split("").reverse().join("");
console.log(reverse_string)