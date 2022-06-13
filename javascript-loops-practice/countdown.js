/* exported countdown */
function countdown(number) {
  var numbers = [];
  var counter = number + 1;
  while (counter > 0) {
    counter--;
    numbers.push(counter);
  }
  return numbers;
}
