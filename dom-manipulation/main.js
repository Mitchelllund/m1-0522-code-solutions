var count = 0;

var hotB = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotB.addEventListener('click', function () {
  count++;
  clickCount.textContent = 'Clicks: ' + count;
  if (count < 4) {
    hotB.className = 'hot-button cold';
  } else if (count < 7 & count >= 4) {
    hotB.className = 'hot-button cool';
  } else if (count < 10 & count >= 7) {
    hotB.className = 'hot-button tepid';
  } else if (count < 13 & count >= 10) {
    hotB.className = 'hot-button warm';
  } else if (count < 16 & count >= 13) {
    hotB.className = 'hot-button hot';
  } else {
    hotB.className = 'hot-button nuclear';
  }
});
