/* exported dropRight */
function dropRight(array, count) {
  if (array.length > count) {
    return array.slice(0, -count);
  }
  return array;
}
