function getInputValueById(inputId) {
  // get the input value
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  inputField.value = "";
  const inputFieldValue = parseFloat(inputFieldString);
  return inputFieldValue;
}

function getValueFromInnerText(innerTextId) {
  const elementInnerText = document.getElementById(innerTextId);
  const elementInnerTextString = elementInnerText.innerText;
  const elementInnerTextValue = parseFloat(elementInnerTextString);
  return elementInnerTextValue;
}

// set the amount to the html page
function setTheElementsToTheDom(innerTextId, newValue) {
  const elementInnerText = document.getElementById(innerTextId);
  // const elementInnerTextString = elementInnerText.innerText;
  elementInnerText.innerText = newValue;
  // const elementInnerTextStringValue = parseFloat(elementInnerTextString);
  // return elementInnerTextStringValue;
}
