// Adds class 'className' to the element with ID "magic".
function addClassToMagicElement(className) {
  var magicElement = document.getElementById("magic")
  magicElement.classList.remove
  (...magicElement.classList);
  magicElement.classList.add(className)
}

var counter = 0;

function doMagic() {
  let number = (counter % 3) + 1;
  counter++;
  addClassToMagicElement("magic-" + number);
}