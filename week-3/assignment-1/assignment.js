/* Instructions
  Type your answer below each question.
*/


// Basic
  // 1) print "Hello World"
    console.log("Hello World")


  // 2) log each typeof (1) boolean, (2) integer, (3) string
    console.log(typeof "hello") // ==> "string"
    console.log(typeof true) // ==> "boolean"


// Variables
  // 1) Declare a variable using `var`


  // 2) Declare a variable using `let`


  // 3) Declare a variable using `const`


  // 4) Assign these variables to the string "Hello"


  // 5) Using `let`, declare and assign the variable to "Hello" in a single line



// Concat
  // 1) concat strings "Hello" and "World" with a plus sign (make sure there is a space between words)
    "hello" + " " + "world"


  // 2) concat strings "Hello" and "World" with .concat (make sure there is a space between words)



// Arrays
  // 1) Build an array which includes the elements: "Matt", "Eric", "Crystal", "Corey", and "Tommy"


  // 2) Assign the array to a variable with `let`


  // 3) Find the first element in the array (hint: array[3] finds the fourth element. Each element in the array has a position that is an integer).


  // 4) Find the last element in the array without using array[4]. (Hint, fuck around with negative integers to find the positions)


// For-loops
  // Example:
    for(var i=0; i<4; i++) {
      // your code
    }


  // 1) Using the above for-loop, print `i` within the for loop and see the results.


  // 2) Create a for-loop which continues until i reaches 10


  // 3) Create a for-loop where i starts at 10 and counts down and stops when it reaches 0 (hint: use i--)


  // 4) Assign the array ["Matt", "Eric", "Crystal", "Corey", "Tommy"] to a variable and console.log the length of the array. (Hint: use the `.length` function)



  // 5) Use the above array's length as the `stop condition` of the for-loop. Then print out `i`.
  // Hint: for(var i=0; i<array.length; i++) {


  // 6) Use the above array's length as the `stop condition` of the for-loop. Then print out the element in the array at that position.
  // Hint: Remember that we can find the first element of the array with array[0].



  // 7) Using the above for loop and array, print out the position of the element and the element itself within each iteration.
  // Hint: console.log can take multiple arguments; you just separate them by commas
  // Hint: console.log("hello", "world") ----> "hello world"



// Push -- Hint: use [].push()
  // 1) Start with an empty array [], and push your name into the array.



  // 2) Start with an empty array, and push elements ("Matt", "Eric", "Crystal", "Corey", and "Tommy") into an empty array. This may take several lines



// Pop
  // 1) Start with the array ["Matt", "Eric", "Crystal", "Corey", "Tommy"], and remove each element from the array, one by one



// Shift
  // 1) Remove elements from the start of the array, ["Matt", "Eric", "Crystal", "Corey", "Tommy"]



// Join
  // 1) Join ["Hello", "World"] to make "Hello, World"



  // 2) Start with ["What", "is", "your", "name"], and give me "What is your name"



  // 3) Start with ["HEY!", "I", "suck"], and give me "HEY! I rule".
  // Hint: use .pop(), .push(), and .join()



// Split
  // Example
    "Hello,World".split(",") //----> Splits the string on the comma and yields ["Hello", "World"]

  // 1) Split the string "Hello World" on the space.



  // 2) Split the string "Hello World" with an empty string --- ("")



  // 3) Split the string "Tommy, Corey, Crystal, Eric" so we get ["Tommy", "Corey", "Crystal", "Eric"]



  // 4) Split the above string and then join it with hyphens so we get "Tommy-Corey-Crystal-Eric"



  // 5) Start with this string "Tommy, Corey, Crystal, Eric", and give me this string "Tommy, Corey, Crystal, Eric, Matt".
  // Hint: Use .split(), .push(), and .join()



  // 6) Split string "category=animals&type=dogs" so we get ["category=animals", "type=dogs"]



  // 7) Split these further so we get ["animals", "dogs"]


// Functions
  // Example
    let hello = function(str) {
      console.log("Hello, " + str)
    };


  // 1) Write a function, sum, that adds two numbers together


  // 2) Write a function, mod, that returns the remainder after dividing a numberator by a divisor


  // 3) Write a function, isLeapYear, that tells me whether a year is a leap year (leap years occur every 4 years)
