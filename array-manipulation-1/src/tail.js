/* exported tail */
/* new functiion containing a array literal assigned to an variable, a for loop with the variable i being equalled to the starting point
(1) i being less than the array.length minus 1, i increasing by 1. push the the new array into the array we created and then return it out of the function */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;

}
