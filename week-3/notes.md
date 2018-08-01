# JS Intro
  - variables
    - var
    - let
    - const
  - declaring vs assigning
  - hoisting
    - Variable declarations are processed before any code is executed. This is called hoisting.
    - Hoisting will not affect assignment. Assignment occurs when the assignment statement is reached
  - scope

  - prompt
  - console.log
  - .length

# Primitives
  - Boolean
  - String
  - Integer
  - null
  - undefined

# Other Types
  - Float
  - Array
  - Objects
  - Function

# Booleans
  - !
  - !!

# Strings
  - +
  - +=
  - .length
  - .substr()
  - .charAt()

# Numbers
  - NaN
  - + - * / %
  - += -= \*= /=
  - Math.pow()
  - Math.random()
  - Math.ceil()
  - Math.floor()
  - Math.round()
  - Math.abs()


# Converting Types
  - Number()
  - String()
  - Boolean()

# Logic Operators
  - `>` greater than
  - `<` less than
  - `===` equal to
  - `!==` not equal to
  - `>=` greater than or equal to
  - `<=` less than or equal to
  - `&&` AND, evaluates true when BOTH operands evaluate to true
  - `||` OR, evaluates to true when EITHER operand evaluates to true

# if/else if/else

# True/False AND Truthy/Falsey
  - Falsey values:
    * numbers: `0`, `NaN`
    * strings: `''`
    * `null`
    * `undefined`


# Mathematical Operations
  +  -> Addition
  -  -> Subtraction
  *  -> Multiplication
  /  -> Division
  ** -> Exponent
  %  -> Modulus operator
  () -> Parens

# For Loop
  - for (let i=0; i<elems.length; i++ {
      return elems[i]
    })

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
