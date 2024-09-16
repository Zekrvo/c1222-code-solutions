/* exported lastChars */
function lastChars(length, string) {
  var strLength = string.length - length;
  if (string.length < length) {
    strLength = 0;
  }
  return string.slice(strLength, string.lengths);
}
