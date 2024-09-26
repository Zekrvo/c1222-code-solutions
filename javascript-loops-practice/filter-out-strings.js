/* exported filterOutStrings */
function filterOutStrings(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof '') {
      arr.push(values[i]);
    }
  }
  return arr;
}
