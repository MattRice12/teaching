# Install git

# Install Sass
  - `npm install -g sass`

# sass watch
  - `sass --watch input.scss:output.css`

# Learn Sass
  - nesting
  - $variables

# More css
  - Priority
    - "cascading" -> Whatever comes last is what matters
    - nesting
    - element < class < id
    - !important
    - inline-styles

  - Media Queries


# JS Intro
  - variables
    - var
    - let
    - const
  - defining vs assigning
  - prompt
  - console.log
  - .length

# Types
  - Boolean
  - String
  - Integer
  - Float
  - Array
  - Objects
  - Function

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

# Selectors
  - querySelector
  - querySelectorAll
  - getElementById
  - getElementsByClassName

# Functions
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
