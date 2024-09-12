/* exported compact */
/* new function  with a new variable which has a new array, then we have a for loop where i is our starting point
then as long as i is less than the lenght of the original array we will keep running the code, we will also be incrimiting by 1.
you then make a if statement and the condition is just checking if the elements that are coming through are truthy and if they are to push to the new array(arr) you then return the new arr out of the function */
function compact(array) {

  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
}
