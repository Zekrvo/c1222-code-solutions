/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var test = '';
  for (var i = 0; i < string.length; i++) {
    if (i !== firstIndex && i !== secondIndex) {
      test += string[i];
    }
    if (i === firstIndex) {
      test += string[secondIndex];
    }
    if (i === secondIndex) {
      test += string[firstIndex];
    }
  }
  return test;
}
