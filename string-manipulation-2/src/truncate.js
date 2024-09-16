/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}
