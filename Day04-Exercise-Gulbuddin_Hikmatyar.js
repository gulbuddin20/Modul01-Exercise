//triangle pattern
    var triangle = (height) => {
    var output = "";
    var count = 1;
    var a = 0;
    for (var i = 0; i <= height; i++) {
        for (var j = 0; j < i; j++) {
            output += `${a}${count} `;
            count++;
        }
        if (count == 10) {
            count = 0;
            a++;
        }
        output += `\n`;
    }
    return output;
    }
    console.log(triangle(4));

//FizzBuzz
function FizzBuzz () {
for (var i=1; i <= 13; i++){
    if (i % 15 == 0) 
    console.log("FizzBuzz");
    else if (i % 3 == 0) 
    console.log("Fizz");
    else if (i % 5 == 0) 
    console.log("Buzz");
    else console.log(i);
}
}
FizzBuzz ()

//BMI
function bmi(weight, height) {
    let bmi = (weight / ((height * height) / 10000));
    if(bmi < 18.5){
      console.log(bmi, "Less Weight");
    }else if (bmi >= 18.5 && bmi <= 24.9){
      console.log (bmi, "Ideal");
    }else if (bmi >= 25 && bmi <= 29.9){
      console.log (bmi, "Overweight");
    }else if (bmi >= 30 && bmi <= 39.9){
      console.log (bmi, "Obese");
    }
    else 
      console.log (bmi, "Obesity");
    }
  bmi (70,160);

//remove odd and return even in array
function even() {
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = num.filter(function (num) {return num % 2 === 0;});
console.log(even);
}
even()

//split string
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
  console.log(newstring("Hello World"));