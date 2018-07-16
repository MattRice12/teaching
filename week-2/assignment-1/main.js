// Basic

  // log "Hello World"
    console.log("Hello, World");

  // log each typeof (1) boolean, (2) integer, (3) string
    console.log("boolean: ", typeof true)
    console.log("integer: ", typeof 1)
    console.log("string: ",  typeof "hello")

// Concat
  let hello = "Hello"
  let world = "World"

  // concat strings "Hello" and "World" with a plus sign (make sure there is a space between words)
  console.log(hello + " " + world)

  // concat strings "Hello" and "World" with .concat (make sure there is a space between words)
  console.log(hello.concat(" ", world))

// Push
  // Push elements into an array
  let array = []
  console.log(array)
  array.push("Matt")
  console.log(array)

// Pop
  // Remove elements from the end of the array
  let array_2 = ["Matt", "John", "Tony"]
  console.log(array_2);
  array_2.pop()
  console.log(array_2);

// Shift
  // Remove elements from the start of the array
  array_2.shift()
  console.log(array_2);

// Join
  // Join strings "Hello" and "World" with a .join (make sure there is a comma and a space between words)
  console.log(["Hello", "World"].join(", "))

// Split
  // Split strings "category=animals&type=dogs" on "&"
  let animalCategory = "category=animals&type=dogs"
  console.log(animalCategory.split("&"));

  // Split these further so we get an array of ["animals", "dogs"]
  let stringArray = animalCategory.split("&")
  let finalArray = []
  for (let i=0; i<stringArray.length; i++) {
    var tempArr = stringArray[i].split("=")
    finalArray.push(tempArr[1])
  }

  console.log(finalArray);

// functions
  function sum(a, b) {
    return a + b;
  };

  console.log(sum(1, 2));

  function mod(num, div) {
    return num % div;
  };

  console.log(mod(10, 3));


  function isLeapYear(year) {
    return year % 4 === 0;
  }

  console.log("938:", isLeapYear(938));
  console.log("940:", isLeapYear(940));
