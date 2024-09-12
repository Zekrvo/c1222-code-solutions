/* exported initial */
/* new function
a for loop where we start at 0 and as long as i is less than the 2nd to last length of the array we continue you the loop
increment by 1
push the old array components to the new one
return the new arr out of the function  */
function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}
