var $contact = document.querySelector('#contact-form');

$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var contactInfo = {};
  contactInfo.name = $contact.name.value;
  contactInfo.email = $contact.email.value;
  contactInfo.message = $contact.message.value;
  console.log(contactInfo);
  $contact.reset();
});
