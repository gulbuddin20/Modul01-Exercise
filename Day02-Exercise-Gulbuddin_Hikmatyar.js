//convert celcius to farenheit
var celcius = 100
var fahrenheit = Math.round((celcius * (9/5)) + 32);
console.log(`${fahrenheit} fahrenheit`);

//check number is odd or even
var nomor = 7;
var status  
    if(nomor % 2 == 0) {
        status = "Genap"
    } 
    else{
        status = "Ganjil"
    }
console.log(`Angka ${nomor} tergolong bilangan ${status}`);

//check number is prime or not
var number = 10
let flag = false;
if (number == 1) 
{
   console.log(" 1 bukan bilangan prima ataupun komposit");
}
   for (let i = 2; i < number / 2; i++) 
   {
      if (number % i == 0) 
      {
         flag = true;
         break;
      }
   }
   if (flag == true) console.log(`${number} bukan bilangan Prima`);
   else console.log(`${number} adalah bilangan Prima`);

//find the sum of the numbers 1 to N
const n = 5;
let sum = 0, i = 1;
while(i <= n) 
    {
    sum += i;
    i++;
    }
console.log(`Total Angka:`, sum);

//find factorial of a number
const no = 5 ;
if (no < 0) 
    {
    console.log('Error! Bilangan Faktorial tidak ada yang negatif');
    }

else if (no === 0) 
    {
    console.log(`Bilangan Faktorial dari ${no} adalah 1.`);
    }

else 
    {
    let fact = 1;
    for (i = 1; i <= no; i++) 
        {
        fact *= i;
        }
    console.log(`Bilangan Faktorial dari ${no} adalah ${fact}.`);
    }

//Print the first N Fibonacci numbers
const numb = 7
let n1 = 0, n2 = 1, nextN;
console.log('Fibonacci Numbers:');
for (let i = 1; i <= numb; i++) {
    console.log(n1);
    nextN = n1 + n2;
    n1 = n2;
    n2 = nextN;
}

//Difference between dates in days
var date1 = new Date("06/30/2022");
var date2 = new Date("07/30/2022");
var timediff = date2.getTime() - date1.getTime();
var days_diff = timediff / (1000 * 3600 * 24);
console.log(`Perbedaan hari: ${date1} dan ${date2} adalah ${days_diff}`);