/* exported getValues */
/* new function
assign a new variable to a empty array
make a for in loop
push the values of the properties from the object using bracket notation into the new array
return the new array out of the function */
function getValues(object) {
  var arr = [];
  for (var key in object) {
    arr.push(object[key]);
  }
  return arr;
}
