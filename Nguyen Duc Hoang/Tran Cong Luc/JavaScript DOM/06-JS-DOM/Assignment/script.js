// script.js
function addClass(className) {
  var element = document.getElementById('example')
  var oldClass = element.getAttribute('class')

  if (!hasClass(oldClass, className)) {
    var newClass = oldClass ? `${oldClass} ${className}` : className
    element.setAttribute('class', newClass)
  }
}

function removeClass(className) {
  var element = document.getElementById('example')
  var oldClass = element.getAttribute('class')

  if (hasClass(oldClass, className)) {
    var oldClassArray = oldClass.split(' ')
    var filteredClassArray = oldClassArray.filter((c) => c !== className)
    var newClass = filteredClassArray.join(' ')
    element.setAttribute('class', newClass)
  }
}

function hasClass(classString, className) {
  if (!classString || !className) return false

  var classArray = classString.split(' ')
  return classArray.includes(className)
}
