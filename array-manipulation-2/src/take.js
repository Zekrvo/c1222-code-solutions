/* exported take */
function take(array, count) {
  if (array.length < count) {
    return array;
  }
  if (array.length > count) {
    return array.slice(0, count);
  }
}
