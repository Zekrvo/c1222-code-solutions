/* exported capitalizeWords */
function capitalizeWords(string) {
  var newWord = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      newWord += string[i].toUpperCase();
    } else {
      newWord += string[i].toLowerCase();
    }
  }
  return newWord;
}
