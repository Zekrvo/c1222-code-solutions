/* exported isVowel */
/* make a new function with a */
function isVowel(char) {
  if (char === 'a' || char === 'e'.toLocaleUpperCase() || char === 'i'.toLocaleUpperCase() || char === 'o' || char === 'u') {
    return true;
  }
  return false;
}
