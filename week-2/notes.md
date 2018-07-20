# Exercise
  - http://flukeout.github.io/

# Install git

# Install Sass
  - `npm install -g sass`

# sass watch
  - `sass --watch input.scss:output.css`

# Learn Sass
  - https://sass-lang.com/guide
  - $variables
  - nesting
  - partials
  - import

# Mobile-first


# More css
  - Priority
    - "cascading" -> Whatever comes last is what matters
    - element < class < id
    - !important
    - inline-styles

  - Media Queries


  - Selectors
    - element (div)
    - class   (.)
    - id      (#)
    - universal (\*)
    - attribute [attr] [attr=value]

  - combinator
    - space
    - ~
    - +
    - >
      - https://github.com/TIY-Austin-Front-End-Engineering/Curriculum/blob/master/units/css-selectors/README.md
      - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

  - pseudo-classes
    - a:visited
    - p:hover
    - div:first-child
    - div:last-child
    - div:nth-child(n)

  - pseudo-elements
    - p::first-line
    - p::before








_________________
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
