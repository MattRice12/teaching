# INSTALL PARTY

1. Install git?
  - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
_________________
# Terminal command (Mac)

**DIRECTORY**
cd		—> movement
ls		—> view directory contents
atom .	—> opens directory in atom

**CREATE**
touch <file.extension>	—> creates file
mkdir <directory>			—> makes a new directory

**DELETE**
rm <file> 			—> removes file
rmdir <folder>		—> removes folder
rm -rf 			—> removes folder, subfiles, and all subfolders recursively until everything is destroyed. ********* BE CAREFUL

_________________
#Command Prompt commands (Windows)

**DIRECTORY**
cd		—> movement
dir		—> view directory contents
atom .	—> opens directory in atom

**CREATE**
copy NUL <file.extension>	—> creates file
mkdir <directory>			—> makes a new directory

**DELETE**
del <file> 			—> removes file
rmdir <folder>			—> removes folder
rd /s /q <directory>		—> removes folder, subfiles, and all subfolders recursively until everything is destroyed. ********* BE CAREFUL

__________________

# HTML template

https://github.com/emilyreese/course-documents/blob/master/basic_boilerplate.html

```
<!doctype html>
<html>
  <head>
  	<meta charset="utf-8">
  	<title>Matt's First Site</title>

  	<link rel="stylesheet" href="./styles.css">
  </head>

  <body>
  		...

  		<script src="./matt.js"></script>
  </body>
</html>
```

**Breakdown**
*!doctype html* —> Informs the web browser that the document being render is an html document

*<html>* —> the root (top-level) element of an HTML document. It contains 1 head and 1 body

*<head>* —> The head of an HTML doc is the part that is not displayed in the web browser when the page is loaded. It contains information such as the page title, links to the favicon, links to css, and other metadata

*<body>* —> The body of an HTML Doc is the part that contains the content that will be displayed on the webpage

__________________

#HTML

**Block Elements**

div
h1, h2, h3, h4, h5, h6
p
ol, ul, li

header
nav
main
article
section
footer


**Inline Elements**
a
span
button
img
b, i, small, sub


**Properties**
id
class
src
	<img src="www.happy-face.png" alt="Happy Face" />
href
	<a href="www.my-site.com">My Site</a>

__________________

#CSS

**Adding CSS**
	Inline Styles
		<div style="color:red"></div>
	Internal Stylesheet
		<link rel="stylesheet" href="main.css" media="screen">
	External Stylesheet
		<link rel="stylesheet" href="https://someones-stylesheet.min.css" media="screen">



**Common Properties**
width
height

margin
padding

color
background

display
position

border
border-radius

text-align

**Common Values**
px
rem
em


_________________

http://wonderful-person.surge.sh/
