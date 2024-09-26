/* exported getValue */
/* new function with 2 parameters
accessing the value from the properties using bracket notation */
function getValue(object, key) {
  return object[key];
}

getValue('dave', 'firstName');
