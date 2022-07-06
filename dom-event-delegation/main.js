document.querySelector('.task-list').addEventListener('click', function (event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.matches('button')) {
    var closest = event.target.closest('.task-list-item');
    console.log('closest ancestor: ', event.target.closest('.task-list-item'));
    closest.remove();
  }
});
