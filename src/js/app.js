var Split = require('split.js')

Split(['#one', '#two'], {
  direction: 'vertical',
  cursor: 'row-resize'
})

var button = document.getElementById('hideToggle')
var text = document.getElementById('text')
text.style.opacity = 1

button.addEventListener('click', () => {
  text.style.opacity == 1 ? text.style.opacity = 0 : text.style.opacity = 1
})