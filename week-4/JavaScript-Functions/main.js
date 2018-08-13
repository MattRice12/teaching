// // 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a,b){

  if (a >= b){
    return a;
  }
  else {
    return b;
  }
    // Your answer here
}
console.log(max(56,104));


// // 2.
// // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// // Then, write and example of using the function.
//
function maxOfThree(l,m,n){
  if (l>m && l>n) {
  return l;
}
  else if (m > n){
    return m;
  }

  else {
  return n;
}
    // Your answer here
}

console.log (maxOfThree (65,15,2));
console.log (maxOfThree (8,42,2));
console.log (maxOfThree (65,15,200));
//
// // 3.
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // Then, write and example of using the function.
//
function isVowel(char){
  if (char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u'){
    return true;
  }
  else {
    return false;
  }
    // Your answer here
}
console.log(isVowel('b'));
console.log(isVowel('k'));
console.log(isVowel('i'));
console.log(isVowel('e'));
console.log(isVowel('u'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(c,d) {
  return (c+d);
}

console.log(sum(34,1033));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg (x,y,z) {
  return ((x+y+z)/3);
}
console.log(avg(10,15,20));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getlength(k){
  return k.length;
}

console.log(getlength('Banana'));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan (p1,p2){
  if (p2 > p1){
    return ('true');
  }
  else {
    return ('false');
  }
  }

console.log(greaterThan(54,342));
console.log(greaterThan(43535,3));



// // 8.
// // Write a function called `greet` that takes a
// // single parameter and returns a string that
// // is formated like "Hello, Name!" where *Name*
// // is the parameter that was passed in.
// // Then, write and example of using the function.
function greet (name) {
  return ("hello, "+name+ "!");
}
console.log(greet("Justin"));

function greet1 (name) {

  return ("hello, "+name+"!");
}
let foo = "Sam";
console.log(greet1(foo));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (noun, verb, place, adj){
 return ('The ' + noun +' ' + verb +' across the '+ place + ' ' + adj +'!');
 }
 console.log(madlib('Banana','dances','stage','gracefully'));
