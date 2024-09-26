/* exported getKeys */
/* new function
assign a variable to an empty array
make a for in loop
push the keys into the new empty array
return the new array out of the function */
function getKeys(object) {
  var arr = [];
  for (var key in object) {
    arr.push(key);
  }
  return arr;
}
