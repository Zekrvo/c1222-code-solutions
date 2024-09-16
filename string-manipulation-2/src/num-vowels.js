/* exported numVowels */
function numVowels(string) {
  var vowels = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'o' || string[i] === 'u' || string[i] === 'i' ||
      string[i] === 'E' || string[i] === 'O' || string[i] === 'U' || string[i] === 'I' || string[i] === 'A') {
      vowels++;
    }
  }
  return vowels;
}
