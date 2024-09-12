var test = document.querySelectorAll('span');
var start = 0;

function characterHandler(e) {
  if (start === test.length) {
    window.alert('test');
    start = 0;
    test[0].className = 'start current';
    for (var i = 1; i < test.length; i++) {
      test[i].className = 'whitespace';
    }
  }
  if (e.key === test[start].textContent) {
    if (start < test.length) {
      test[start].className += ' pressed';
      if (test[start].className.includes('start')) {
        test[start].className = 'pressed whitespace';
      }
      start++;
      test[start].className = 'start whitespace';

    }
  } else {
    test[start].className += ' wrong-key';
  }
}

document.addEventListener('keydown', characterHandler);
