var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      $tab[i].classList.remove('active');
      event.target.classList.add('active');
    }
  }
  var dataView = event.target.getAttribute('data-view');
  for (var index = 0; index < $view.length; index++) {
    if ($view[index].getAttribute('data-view') === dataView) {
      $view[index].classList.remove('hidden');
    } else {
      $view[index].classList.add('hidden');
    }
  }
});
