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
  // Declare a variable using `var`


  // Declare a variable using `let`


  // Declare a variable using `const`


  // Assign these variables to the string "Hello"


  // Using `let`, declare and assign the variable to "Hello" in a single line



// Concat
  // 3) concat strings "Hello" and "World" with a plus sign (make sure there is a space between words)
    "hello" + " " + "world"

  // 4) concat strings "Hello" and "World" with .concat (make sure there is a space between words)


// Arrays
  // Build an array which includes the elements: "Matt", "Eric", "Crystal", "Corey", and "Tommy"


  // Assign the array to a variable with `let`


  // Find the first element in the array (hint: array[3] finds the fourth element)
    // Each element in the array has a position that is an integer.


  // Find the last element in the array without using array[4]
    // Hint, fuck around with negative integers to find the positions


// For-loops
  for(var i=0; i<4; i++) {
    // your code
  }

  // Using the above for-loop, print `i` within the for loop and see the results.


  // Create a for-loop which continues until i reaches 10


  // Create a for-loop where i starts at 10 and counts down and stops when it reaches 0 (hint: use i--)


  // Assign the array ["Matt", "Eric", "Crystal", "Corey", "Tommy"] to a variable and console.log the
  // length of the array.
  // Hint: use the `.length` function



  // Use the above array's length as the `stop condition` of the for-loop.
  // Then print out `i`
  // Hint: for(var i=0; i<array.length; i++) {


  // Use the above array's length as the `stop condition` of the for-loop.
  // Then print out the element in the array at that position
  // Hint: Remember that we can find the first element of the array with array[0].



  // console.log can take multiple arguments; you just separate them by commas
  // console.log("hello", "world") ----> "hello world"
  // Using the above for loop and array, print out the position of the element and the element itself within each iteration.


// Push -- Hint: use [].push()
  // Start with an empty array []
  // and push your name into the array

  // Start with an empty array
  // and push elements ("Matt", "Eric", "Crystal", "Corey", and "Tommy") into an empty array
  // This may take several lines


// Pop
  // Start with the array ["Matt", "Eric", "Crystal", "Corey", "Tommy"]
  // And remove each element from the array, one by one


// Shift
  // 7) Remove elements from the start of the array, ["Matt", "Eric", "Crystal", "Corey", "Tommy"]


// Join
  // 8) Join ["Hello", "World"] to make "Hello, World"

  // Start with ["What", "is", "your", "name"]
  // And give me "What is your name"


  // Start with ["HEY!", "I", "suck"]
  // And give me "HEY! I rule"
  // Hint: use .pop(), .push(), and .join()
  

// Split
  // Use .split() to split a string into an array based on a specific character pattern.
    // "some string".split("")

  // Example
    "Hello,World".split(",") //----> Splits the string on the comma and yields ["Hello", "World"]

  // Split the string "Hello World" on the space.


  // Split the string "Hello World" with an empty string --- ("")


  // Split the string "Tommy, Corey, Crystal, Eric" so we get ["Tommy", "Corey", "Crystal", "Eric"]


  // Split the above string and then join it with hyphens so we get "Tommy-Corey-Crystal-Eric"


  // Start with this string "Tommy, Corey, Crystal, Eric",
  // and give me this string "Tommy, Corey, Crystal, Eric, Matt"
  // Hint: Use .split(), .push(), and .join()


  // 9) Split string "category=animals&type=dogs" so we get ["category=animals", "type=dogs"]


  // 10) Split these further so we get ["animals", "dogs"]


// functions
  // Example
  let hello = function(str) {
    console.log("Hello, " + str)
  };

  // 11) Write a function, sum, that adds two numbers together

  // 12) Write a function, mod, that returns the remainder after dividing a numberator by a divisor

  // 13) Write a function, isLeapYear, that tells me whether a year is a leap year (leap years occur every 4 years)
