var bookShelf = [
  {
    isbn: '978-1599869773',
    title: 'The Art of War',
    author: 'Sun Tzu'
  },
  {
    isbn: '978-0812968255',
    title: 'Meditations',
    author: 'Marcus Aurelius'
  },
  {
    isbn: '978-0140280197',
    title: 'The 48 Laws of Power',
    author: 'Robert Greene'
  }
];

console.log('bookshelf: ', bookShelf);
console.log('typeof bookShelf: ', typeof bookShelf);
console.log('JSON,stringify: ', JSON.stringify(bookShelf));
console.log('typeof JSON,stringify: ', typeof JSON.stringify(bookShelf));

var student = '{"Id": 616, "Name": "Johnny Blaze"}';

console.log('student: ', student);
console.log('typeof student: ', typeof student);

var jsonParse = JSON.parse(student);

console.log('jsonParse: ', jsonParse);
console.log('typeof jsonParse: ', typeof jsonParse);
