var test = document.querySelector('button');
var num = 0;
function tester(event) {
  var onetime = document.querySelector('button');
  var othertime = document.querySelector('body');
  num += 1;
  if (num % 2 === 0) {
    onetime.className = 'light';
    othertime.className = 'lights';
  } else {
    onetime.className = 'right';
    othertime.className = 'rights';

  }
}

test.addEventListener('click', tester);
