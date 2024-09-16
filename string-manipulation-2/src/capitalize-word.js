/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  newWord = newWord.slice(0, 1).toUpperCase() + newWord.slice(1);
  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
