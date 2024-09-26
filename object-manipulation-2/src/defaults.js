/* exported defaults */
function defaults(targets, source) {
  for (var key in source) {
    if (targets[key] === undefined) {
      targets[key] = source[key];
    }
  }
}
