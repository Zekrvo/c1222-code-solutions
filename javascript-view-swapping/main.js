var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
function testOn(event) {
  if (event.target && event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
        var test = event.target.getAttribute('data-view');
        for (var j = 0; j < $view.length; j++) {
          var test2 = $view[j].getAttribute('data-view');
          if (test === test2) {
            $view[j].className = 'view';
          } else {
            $view[j].className = 'hidden';
          }
        }
      } else {
        $tab[i].className = 'tab';
      }

    }
  }
}
$tabContainer.addEventListener('click', testOn);
