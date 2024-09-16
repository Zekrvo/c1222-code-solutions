/* exported capitalize */
/* going to use to the 0 index to access the first letter to use toUpperCase() then we'll add that to the rest of the word
by using slice method(cut 1 to get rid of the original letter) then well use the toLowerCase() property to lower case the rest of the word */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
