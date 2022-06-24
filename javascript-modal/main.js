var open = document.querySelector('.open');
var modal = document.querySelector('.modal');
var no = document.querySelector('.no');

open.addEventListener('click', openModal);
no.addEventListener('click', closeModal);

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}
