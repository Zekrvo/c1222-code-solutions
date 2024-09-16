/* exported isLowerCased */
/* make a new function then use a if conition to check if the words are strictly equal to word.tolowercase using the lower case property */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
