function palindrome(str) {
  const filteredString = str
    .replace(/[^a-zA-Z0-9]+|\s+/g, "")
    .split("")
    .map((element) => element.toLowerCase())
    .join("");
  console.log(filteredString);
  const strReverse = filteredString
    .split("")
    .reduce((reversedWord, element, index, array) => {
      return reversedWord + array[array.length - index - 1];
    }, "");
  return strReverse === filteredString;
}
