/* exported ransomCase */
function ransomCase(string) {
  var oneWord = string[0].toLowerCase();
  for (var odd = 1; odd < string.length; odd++) {
    if (odd % 2 === 0) {
      oneWord += string.toLowerCase()[odd];
    } else {
      oneWord += string.toLowerCase()[odd].toUpperCase();
    }
  }
  return oneWord;
}
