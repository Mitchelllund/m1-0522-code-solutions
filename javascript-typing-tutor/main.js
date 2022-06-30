var $span = document.querySelectorAll('span');
var $counter = document.querySelector('.counter');
var i = 0;
var count = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $span[i].textContent) {
    i++;
    $span[i - 1].classList.remove('underline');
    $span[i].classList.add('underline');
    $span[i - 1].classList.add('green');
    $span[i - 1].classList.remove('red');
  } else if (event.key !== $span[i].textContent) {
    $span[i].classList.add('red');
    count++;
    $counter.textContent = 'Mistakes: ' + count;

  }
});
