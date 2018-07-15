// MY STUFF, IGNORE THIS

const setQuestionNumber = () => {
  document.querySelectorAll('h3').forEach((elem, i) => {
    elem.innerText = `${i + 1}) ${elem.innerText}`
  })
}


setQuestionNumber()
