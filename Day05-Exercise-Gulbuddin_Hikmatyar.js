//find array lowest and highest array
// without sort
let numberArr = [10, 20, 25, 2, 4, 23];
let highest = Math.max(...numberArr);
let lowest = Math.min(...numberArr);
console.log("Highest Number: " + highest); 
console.log("Lowest Number: " + lowest); 
// avarage 
var total = 0;
for(var i = 0; i < numberArr.length; i++) {
    total += numberArr[i];
}
var avg = total / numberArr.length;
console.log("Avarage:" ,avg);


//with sort
let lowhighSort = (numberArr) => {
    numberArr.sort();
    let min = Math.min(...numberArr);
    let max = Math.max(...numberArr);
    let total = 0;
        for(var i = 0; i < numberArr.length; i++) {
        total += numberArr[i];
}
    var avg = total / numberArr.length
    let hasil = `With Sort\nHighest Number = ${max}\nLowest Number = ${min}\nAvarage = ${avg}\n`;
    return hasil;
  };
  console.log(lowhighSort(numberArr));

//Seperates String With Comas with and
let input = ['Hello', 'World', 'Bro'];
let last = input.pop();
let result = input.join(', ') + ' and ' + last;
console.log(result);

//Split String
var newstring = (words) => {
    var ar = [];
    var string = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== " ") {
        string += words[i];
      } else {
        ar.push(string);
        string = "";
      }
    }
    if (string) {
      ar.push(string);
    }
    return ar;
  };
  console.log(newstring("Hello World Bro"));

//Calculate two Arrays
function sumArray(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}
var a = [1, 2, 3, 4, 5];
var b = [1, 2, 3, 4];
console.log(sumArray(a, b));

//add an element to the end of an array
let variable = ["a", "b", "c"];
let newVar = (input) => {
  if (!variable.includes(input)) {
    variable.push(input);
  }
  return variable;
};
console.log(newVar("b"));

//remove odd and return even only
function even() {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var even = num.filter(function (num) {return num % 2 === 0;});
    console.log(even);
    }
    even()