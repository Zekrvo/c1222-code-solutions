/* exported reverse */
/* new function
assign a new variable to an array
assign the last element of the array to a variable
make a for loop assign the variable i to the last element, as long as i is greater than or equal to 0 we'll keep running it
minus 1
push the old array to the new one
return the array out of the function */
function reverse(array) {
  var arr = [];
  var tes = array.length - 1;
  for (var i = tes; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
