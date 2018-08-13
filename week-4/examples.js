//
// function helloWorld() {
//   console.log('Hello, World!');
// };
//
// helloWorld();
//
// function hello(name) {
//   console.log('Hello,', name);
// };
//
// hello("Bob");
//
// function returnHello(name) {
//   return 'Hello, ' + name;
// };
//
// let h1 = returnHello('Bob')
// console.log(h1);
//

/* ___________________ */
//// Numbers

// function sum(a, b) {
//   return a + b;
// };
//
// function square(num) {
//   return num ** 2;
// };

/* ___________________ */
//// Arrays

// function sumArray(array) {
//   let total = 0;
//   for (let i=0; i<array.length; i++) {
//     total += array[i];
//   }
//
//   return total;
// }
//
// console.log(sumArray([1, 2, 3, 4, 5]));


// function factorial(num) {
//   let total = 1;
//   for(let i=num; i>0; i--) {
//     total = total * i;
//   }
//
//   return total;
// };
//
// let fact = factorial(4)
//
// console.log(fact);

/* ___________________ */
//// Strings

// function isPalindrome(str) {
//   let formattedStr = str.toLowerCase().replace(' ', '')
//   let reverseStr = formattedStr.split('').reverse().join('')
//   return formattedStr === reverseStr;
// }
//
// let bob = isPalindrome('Bob');
// let tuba = isPalindrome('A but tuba');
// let glass = isPalindrome('The glass is half full')
//
// console.log('bob', bob);
// console.log('tuba', tuba);
// console.log('glass', glass);

/* ___________________ */
//// Objects


// let matt   = { name: "Matt", age: 30 }
// let bob    = { name: "Bob", age: 67 }
// let timmy  = { name: "Timmy", age: 14 }
//
// function bounce(person) {
//   if (person.age < 21) {
//     return person.name + ", you are not old enough to drink."
//   } else if (person.age < 65) {
//     return person.name + ", you're old enough to drink, but not old enough for that sweet retirement money."
//   } else {
//     return person.name + ", you should start looking at coffins."
//   }
// }
//
// console.log(bounce(matt))
// console.log(bounce(bob))
// console.log(bounce(timmy))

/* ___________________ */
//// Fizzbuzz

/// V1

// function fizzbuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "FizzBuzz";
//   } else if (num % 3 === 0) {
//     return "Fizz";
//   } else if (num % 5 === 0) {
//     return "Buzz"
//   } else {
//     return num
//   }
// }

/// V2

// function fizzbuzz(num) {
//   let result = []
//   if (num % 3 === 0) result.push("Fizz");
//   if (num % 5 === 0) result.push("Buzz");
//   if (result.length === 0) return num;
//   return result.join("");
// }
//
// let max = 100;
//
// for(let i=1; i<=max; i++) {
//   console.log(fizzbuzz(i))
// }

/* ___________________ */
