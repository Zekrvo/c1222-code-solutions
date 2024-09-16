/* exported reverseWord */
/* create a new function, make a variable for a new string, a new variable for the end of the letter(our starting point)
make a for loop (assign i to the end of of the letter, make sure i is greater than 0(to continue the loop), decrement i (going back).
add the new string with string and the starting point(index) to get the new string, we then return the reverse string out of the function */
function reverseWord(word) {

  var tes = '';
  var tes2 = word.length - 1;
  for (var i = tes2; i >= 0; i--) {
    tes += word[i];
  }
  return tes;
}
