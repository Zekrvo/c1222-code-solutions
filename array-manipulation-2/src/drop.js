/* exported drop */
function drop(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    arr.push(array[count++]);
  }
  return arr;
}
