var bSwitch = document.querySelector('.toggle');
var body = document.querySelector('body');

function toggleButton() {
  bSwitch.classList.toggle('active');
  body.classList.toggle('active');
}

bSwitch.addEventListener('click', toggleButton);
