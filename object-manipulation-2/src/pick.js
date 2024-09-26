/* exported pick */
function pick(source, keys) {
  var object = {};
  for (var key of keys) {
    if (source[key] !== undefined) {
      object[key] = source[key];
    }
  }
  return object;
}
