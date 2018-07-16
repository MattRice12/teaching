const hints = {
  _alert: (id, hint) => {
    document.getElementById(id).addEventListener("click", () => {
      alert(hint)
    })
  },
  _instructions: () => hints._alert("instructionsHint", "1) let elem = document.querySelector('#--the id--');\n2) elem.innerText('some Text');"),
  _prompt:       () => hints._alert("promptHint", "let result = prompt('Question');"),
  _split:        () => hints._alert("splitHint", "'Hello World'.split(' ');  ---> ['Hello', 'World']"),
  _join:         () => hints._alert("joinHint", "['Hello', 'World'].join('_');  ---> 'Hello_World'"),
  _floor:        () => hints._alert("floorHint", "Math.floor(float);"),
  _round:        () => hints._alert("roundHint", "float.toFixed(precision);"),
  _modulus:      () => hints._alert("modulusHint", "%"),
  _forLoop:      () => hints._alert("forLoopHint", "for (let i=0; i<elems.length; i++) {\n\telems[i];\n});"),
  _functions:    () => hints._alert("functionsHint", "const sum = function() {\n\t...\n};\nsum(2, 3);\n\n -OR-\n\nfunction sum(a, b) {\n\t...\n};\nsum(2, 3);"),
  _appendName:   () => hints._alert("appendNameHint", "elem.innerText = elem.innerText + 'new text';\n\n -OR-\n\n elem.innerText += 'new text';"),
  _insertHTML:   () => hints._alert("insertHtmlHint", "1) Instead of innerText, try innerHTML"),
  _arrayHtml:    () => hints._alert("arrayInsertHtmlHint", "The HTML would look like:\n<div>\n\t<span class='item-1'>1</span>\n\t<span class='item-2'>2</span>\n\t<span class='item-3'>3</span>\n</div>"),
}

//Instructions
hints._instructions()

//Basic
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
