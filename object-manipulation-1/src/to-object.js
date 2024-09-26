/* exported toObject */
/* New function
assign a empty object to a variable
use a for loop for the array to get the values out of the array
start from 1 to get the value
let the loop run for all of keyvaluepair length
iterrate by 1
get the value from keyValuePair and add it to the obj and give it, its
property by accessing the 0 index of the parameter
return the obj out of the function   */
function toObject(keyValuePair) {
  var obj = {};
  for (var i = 1; i < keyValuePair.length; i++) {
    obj[keyValuePair[0]] = keyValuePair[i];

  }
  return obj;
}
