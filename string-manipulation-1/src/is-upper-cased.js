/* exported isUpperCased */
/* we will setup a function named is upper cased
we'll then use a if condition to see if the words are strictly equal to uppercased using uppercase propert */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
