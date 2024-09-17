var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log(`The books title is ${bookshelf[1].title} and its isbn ${bookshelf[1].isbn} and the author being:`, bookshelf[1].author);

console.log(`The books title: ${bookshelf[0].title}. The books author: ${bookshelf[0].author}. The books isbn:`, bookshelf[0].isbn);

console.log(`The books author: ${bookshelf[2].author}. The books isbn: ${bookshelf[2].isbn}. The books title:`, bookshelf[2].title);
