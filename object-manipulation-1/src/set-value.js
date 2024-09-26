/* exported setValue */
/* new function with 3 parameters
put the new value and property into the object(use bracket notation)
return the object */
function setValue(object, key, value) {
  object[key] = value;
  return object;
}
