# JS Intro
  - variables
    - `var`
      - var is old javascript syntax. You'll see it but we avoid it now.
      - var lets you re-define a variable multiple times without throwing an error.
      - var also has some weird scoping issues which we'll cover later.

    - `let`
      - let is new javascript syntax (as of 2015). You'll primarily use let to declare variables.
      - let throws errors of you try to redeclare (this is good). You can still assign the variable multiple times without any problems.
      - let has better and more predictable scoping (we'll cover later)

    - `const`
      - const is new javascript syntax and stands for constant.
      - Constants are not supposed to be redeclare or reassigned. They are set once and never changed.
      - JavaScript will throw an error if you try to re-declare it or reassign it.
      - You must declare and assign a constant at the same time (e.g., `const a = 1`).
      - Constants are used when assigning functions to a variable `const sum = function(a, b) {...}`
      - Constants are used when you have numbers or strings which you know won't change throughout the program.

  - declaring vs assigning
    - declaring:
      ```
        var a;
        let a;
      ```

    - assigning:
      ```
        a = 1
        a = "hi"
        a = true
      ```

    - declaring and assigning:
      ```
        var a = "Hello"
        let a = "Okay"
        const a = "Weird"
      ```

  - console.log
    - `console.log("Hello World")` --> this prints "Hello World" in your terminal under the "Console" tab
    - `console.log("name:", "Matt")` --> prints "name: Matt"

  - .length
    - On strings: `"Matt".length` --> shows the length of the string "Matt" (returns 4)
    - On arrays: `["Austin", "Matthew", "Rice"].length` --> shows the number of items in an array (returns 3)

# Primitives
  - Boolean
    - true, false

  - String
    - "hi", "hello", "matt"

  - Number
    - 1, 2, -1, 0, 45, 1.34

  - Object
    - {name: "Matt", age: 30}

  - undefined
    - this occurs when you declare a variable but don't assign it `let a;`

  - Function
    - `function() { ... }`

# Other Types
  - Float
    - numbers with decimals
    - 1.34

  - Array
    - These are lists containing elements
    - [1, 2, 3]
    - ["Matt", "Tommy", "Corey", "Crystal", "Eric"]
    - [true, false, 0, "hi", null]

  - null
    - the lack of a value

# Booleans
  - !
  - !!

# Strings
  - +
  - .concat
    - Combines two strings together
    - `"hello".concat("world")` --> "helloworld"

  - .substr()
    - returns a section of the string from the designated position to the end or until the position set in the second argument
    - `"hello".substr(2)` --> "llo"
    - `"hello world".substr(2, 5)` --> "llo w"

  - .charAt()
    - returns the character at the given position
    - `"hello world".charAt(3)` --> "l"

# Numbers
  - NaN
  - += -= \*= /=
  - Math.pow()
  - Math.random()
  - Math.ceil()
  - Math.floor()
  - Math.round()
  - Math.abs()


# Converting Types
  - Number()
    - `Number("1")` --> 1
  - String()
    - `String(true)` --> "true"
  - Boolean()
    - `Boolean(1)` --> true
    - `Boolean(0)` --> false
    - `Boolean("hello")` --> true

# Logic Operators
  - `>` greater than
  - `<` less than
  - `===` equal to
  - `!==` not equal to
  - `>=` greater than or equal to
  - `<=` less than or equal to
  - `&&` AND, evaluates true when BOTH operands evaluate to true
  - `||` OR, evaluates to true when EITHER operand evaluates to true

# if/ else if /else

# True/False AND Truthy/Falsey
  - Truthy values:
    - Anything that is not falsey or false

  - Falsey values:
    * numbers: `0`, `NaN`
    * strings: `''`
    * `null`
    * `undefined`

# For Loop
  - for-loops loop a set amount of times and runs the code within the loop every time it loops
    ```
      for (var i=0; i<4; i++) {
        console.log(i)
      })

      // this returns:
      0
      1
      2
      3
    ```

  - When you have an array and want to iterate through each element in the array
  - use array.length to get the length of the array
    ```
      let array = ["Austin", "Matthew", "Rice"]
      for (var i=0; i<array.length; i++) {
        console.log(array[i])
      })

      // This returns:
      "Austin"
      "Matthew"
      "Rice"
    ```

# Errors & Debugging
  - Notice when a JS error occurs, all of the JS disappears from the page. This is a big tell that your JS is fucked up.
  - Steps for debugging:
    1) Look in the console for an error.
    2) Throw your arms up in frustration

# Functions
  - Types
    1) Function Declaration
      ```    
        function isEven(num) {  
          return num % 2 === 0;
        }
      ```

    2) Function Expression
      ```
        var isEvent = function(num) {
          return num % 2 === 0;
        }
      ```

    2) Anonymous Functions
      ```
        function() {
          return num % 2 === 0;
        }
      ```

  - Scope (reprise)



# Selectors
  - querySelector
  - querySelectorAll
  - getElementById
  - getElementsByClassName
