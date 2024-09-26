/* exported countdown */
function countdown(number) {
  var arr = [];
  while (number >= 0) {
    arr.push(number);
    number--;
  }
  return arr;
}
countdown(10);
