function charROT13(char) {
  if (char.charCodeAt(0) < 78) {
    return String.fromCharCode(90 + char.charCodeAt(0) - 65 - 13 + 1);
  }
  return String.fromCharCode(char.charCodeAt(0) - 13);
}

function rot13(str) {
  return str
    .split("")
    .map((element) => element.toUpperCase())
    .map((element) => {
      if (element.match(/\w/)) {
        return charROT13(element);
      }
      return element;
    })
    .join("");
}
