// seeds.js

// 1. Require the Node.js File System library
// 2. Require Faker.js
var fs = require('fs');
var faker = require('faker');

// 3. Create a data/ directory if
// it doesn't already exist
console.log('Creating data directory');
fs.mkdir('data', function(error) {});

// ----------------------------------------
// Config
// ----------------------------------------

// 4. Set the number of posts we'll create
var COUNT = 100;


// ----------------------------------------
// Seeds
// ----------------------------------------

// 5. Use faker to create posts
// in an object where each key is an id
// for a post
console.log('Creating Posts');
var posts = {};
for (var i = 0; i < COUNT; i++) {
  var id = i + 1;
  var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  var post = {
    id: id,
    title: faker.commerce.productName(),
    body: faker.hacker.phrase(),
    author: faker.name.firstName() + ' ' +
      faker.name.lastName(),
    image: faker.image.cats(),
    createdAt: date,
    updatedAt: date
  };
  posts[id] = post;
}

// ----------------------------------------
// Write Files
// ----------------------------------------

// 6. Write the object to a file
// that exports the object
console.log('Writing Data Files');
var data = 'module.exports = ';
data += JSON.stringify(posts, null, 2);
data += ';\n';

fs.writeFile('data/posts.js', data, function(error) {
  if (error) {
    console.log(error);
  }
});

// ----------------------------------------
// Finish
// ----------------------------------------

console.log('Done');


