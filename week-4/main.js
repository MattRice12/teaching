//// Strings

// 1) create a function the logs "Hello World"

function hello() {
  console.log("Hello World");
};
hello();

const hello2 = () => {
  console.log("Hello World");
};
hello2();

const hello3 = function() {
  return "Hello World";
};
console.log(hello3());


// 2) create a function the logs "Hello ____" where your name is filled in

const helloName = (name) => {
  return `Hello, ${name}`;
};
console.log(helloName("Jimbo"));

/* ___________________ */
//// Numbers

// 1) Create a function that adds two numbers together

const sum = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  return "Invalid Input; must be numbers"
};

console.log(sum(2, 3));
console.log(sum("a", "b"));

// 2) Create a function that squares a single number

const square = (num) => {
  return num ** 2;
};
console.log(square(5));

const square2 = (x) => {
  return x * x;
}
console.log(square2(6));

const square3 = (y) => {
  return Math.pow(y, 2);
}
console.log(square3(8));

// 3) Create a function that squares the sum of two numbers, using the above functions

const squareSum = (x, y) => {
  return square(sum(x, y));
}
console.log(squareSum(2, 3))

const sum4 = (x, y) => {
  return x + y
}

const maths = (sum) => {
  return Math.pow(sum, 2)
}

const sqsum = (x, y) => {
  let sumResult = sum4(x, y)
  let squareResult = maths(sumResult)
  return squareResult;
};

console.log(sqsum(2, 3));

/* ___________________ */
//// Arrays
console.log("**************");
console.log("ARRRAAAYYYS");
console.log("**************");

// 1.a) Create a function that takes an array of numbers and adds them together

let numbers = [1, 2, 3, 4, 5]
let result = 0

const arraySum = (array, startingAmount = 0) => {
  let result = startingAmount
  for (let i=0; i<numbers.length; i++) {
    result += numbers[i]
  }
  return result;
}

console.log(arraySum(numbers));

// 1.b) Do this with forEach


result = 0
numbers.forEach(num => {
  result += num;
})
console.log('forEach result', result);

// [1, 2, 3].forEach((element, index, array) => {
//   console.log('element', element);
//   console.log('index', index);
//   console.log('array', array);
// })


// 1.c) Do this with reduce

numbers = [1, 2, 3, 4, 5]

let reducedResult = numbers.reduce((acc, num) => {
  return acc += num
}, 0)

console.log("reduce result", reducedResult);

// [].reduce( func, acc)
// [].reduce( func, 0)
// [].reduce( func, [])
// [].reduce( func, {})
// [].reduce( func, "")

// 2.a) Create a function that finds the factorial of a number (4! === 4x3x2x1)



const factorial = (num) => {
  result = 1
  for (let n=1; n<=num; n++) {
    result *= n
  }
  return result
}

console.log(factorial(4));


// 2.b) Do this with forEach

// input is number (4)
// output is array [1, 2, 3, 4]
const buildNumberArray = (num) => {
  let factNum = []
  for(let n=1;n<=num;n++) {
    factNum.push(n)
  }
  return factNum
}

// input is number (4)
// output is 4! (factorial)
const factorial2 = (num) => {
  result = 1
  let factorialNumbers = buildNumberArray(num)
  factorialNumbers.forEach(n => {
    result *= n
  })
  return result
}

console.log(factorial2(4));


// 2.c) Do this with reduce???

let redResult = buildNumberArray(5).reduce((acc, num) => {
  acc *= num
  return acc
}, 1)

console.log(redResult);

/* ___________________ */
//// Strings

// Create a function that determines whether a string is a palindrome (characters are in the same order forwards and backwards)
  // - "bob"
  // - "A but tuba"
  // - "The glass is half full"

/* ___________________ */
//// Objects


// Write a function with the following data that bounces a person if they are under certain ages

// let matt   = { name: "Matt", age: 30 }
// let bob    = { name: "Bob", age: 67 }
// let timmy  = { name: "Timmy", age: 14 }


/* ___________________ */

//// Reduce into objects

// Write a function with the following array of names ["Matt", "Eric", "Crystal", "Eric", "Eric", "Crystal"], and build an object with the person's name as the key, and the number of times their name shows up as the value

// {
//   key: value,
//   key2: value2
// }


let ourNames = ["Matt", "Eric", "Crystal", "Eric", "Eric", "Crystal"]

// takes an array
// returns an objecta
let objResult = ourNames.reduce((acc, name) => {
  if (acc[name]) {
    acc[name] += 1
  } else {
    acc[name] = 1
  }
  return acc
}, {})

console.log(objResult);


// Write a function with the following string "George Washington, Adam West, Kanye West" and build the following result
// {
//   Washington: [ 'George' ],
//   West: [ 'Adam', 'Kanye' ]
// }

let strNames = "George Washington, Adam West, Kanye West"

// split to get the array
let strArray = strNames.split(", ")

let westNames = strArray.reduce((acc, name) => {
  // splitting each name into ["first", "last"]
  let nameArr = name.split(" ")
  let first = nameArr[0]
  let last = nameArr[1]

  if (acc[last]) {
    acc[last].push(first)
  } else {
    acc[last] = [first]
  }

  return acc
}, {})

console.log(westNames);

/* ___________________ */
//// Fizzbuzz

// Write FizzBuzz for numbers 1 through 100
