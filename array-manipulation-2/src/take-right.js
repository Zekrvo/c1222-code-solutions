/* exported takeRight */
function takeRight(array, count) {
  if (array.length < count) {
    return array;
  }
  if (array.length > count) {
    return array.slice(-count);
  }
}
