# Exercise
  - http://flukeout.github.io/

# Install git

# More css
  - Priority
    - "cascading" -> Whatever comes last is what matters
    - id > class > element
    - nesting
    - !important
    - inline-styles

  - Styling tricks
    - float & overflow: hidden
      - floating all the elements in a block collapses the block to 0px height. So any elements coming after this block "seem" to be inline with the floated elements.
      - declaring overflow (any value other than visible) establishes a new block formatting context, which makes the block contains its children.

    - box-sizing
      - box-sizing CSS property defines how the user agent should calculate the total width and height of an element.
        - content-box - the width and height is applied only to the content.
        - border-box - the width and height is applied to the content, padding, and border. This makes styling easier.
          * { box-sizing: border-box; }

    - z-index

    - flex


  - Selectors
    - element (div)
    - class   (.)
    - id      (#)
    - universal (\*)
    - attribute [attr] [attr=value]

  - combinator
    - space
    - ~ ---> grabs all siblings (A ~ B)
    - + ---> grabs first sibling (A + B)
    - > ---> grabs direct children (A > B)
      - https://github.com/TIY-Austin-Front-End-Engineering/Curriculum/blob/master/units/css-selectors/README.md
      - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

  - pseudo-classes
    - :visited
    - :hover
    - :checked
      - input[type="radio"]:checked
    - :not
      - input[type="checkbox"]:not(:checked)
    - :first-child
    - :last-child
    - :nth-child(n)

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
  - Media Queries
