const hints = {
  alert: (id, hint) => {
    document.getElementById(id).addEventListener("click", () => {
      alert(hint)
    })
  },
  _oneHundred: () => hints.alert("oneHundredHint", "1) document.querySelector('#--the id--')\n2) innerText('some Text')"),
  _prompt:     () => hints.alert("promptHint", "let result = prompt('Question')"),
  _split:      () => hints.alert("splitHint", "'Hello World'.split(' ')  ---> ['Hello', 'World']"),
  _join:       () => hints.alert("joinHint", "['Hello', 'World'].join('_')  ---> 'Hello_World'"),
  _floor:      () => hints.alert("floorHint", "Math.floor(float)"),
  _round:      () => hints.alert("roundHint", "float.toFixed(precision)"),
  _modulus:    () => hints.alert("modulusHint", "%"),
  _forLoop:    () => hints.alert("forLoopHint", "for (let i=0; i<elems.length; i++ {\n\telems[i]\n})"),
  _functions:  () => hints.alert("functionsHint", "const sum = function() {\n\t...\n}\nsum(2, 3)\n\n -OR-\n\nfunction sum(a, b) {\n\t...\n}\nsum(2, 3)"),
  _appendName: () => hints.alert("appendNameHint", "something else"),
  _insertHTML: () => hints.alert("insertHtmlHint", "1) Instead of innerText, try innerHTML"),
  _arrayHtml:  () => hints.alert("arrayInsertHtmlHint", "The HTML would look like:\n<div>\n\t<span class='item-1'>1</span>\n\t<span class='item-2'>2</span>\n\t<span class='item-3'>3</span>\n</div>"),
}

//Basic
hints._oneHundred()
hints._prompt()
hints._split()
hints._join()

//Math
hints._floor()
hints._round()
hints._modulus()

//Arrays
hints._forLoop()


//Functions
hints._functions()
hints._appendName()
hints._insertHTML()
hints._arrayHtml()
