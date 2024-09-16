/* exported getWords */
/* create a new function with a if condition inside saying if the string length is more than one to use the split method to take out the words and put them in array and if the length is not more than one to just return an empty array(the string) */
function getWords(string) {
  if (string.length > 1) {
    return string.split(' ');
  }
  return string.split(string);
}
