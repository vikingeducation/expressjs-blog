var express = require('express');
var app = express();
var posts = require('./data/posts');

// ----------------------------------------
// Config
// ----------------------------------------

app.set('view engine', 'ejs');


// ----------------------------------------
// Routes
// ----------------------------------------

app.get('/', function(request, response) {
  response.render('layouts/application', {
    view: 'posts/index',
    posts: posts
  });
});

app.get('/posts/:id', function(request, response) {
  var id = request.params.id;
  if (posts[id]) {
    response.render('layouts/application', {
      view: 'posts/show',
      post: posts[id]
    });
  } else {
    response.status(404).render('layouts/application', {
      view: 'errors/404',
      posts: posts
    });
  }
});


// ----------------------------------------
// Error Handling
// ----------------------------------------

app.use(function(request, response, next) {
  response.status(404).render('layouts/application', {
    view: 'errors/404',
    posts: posts
  });
});

// ----------------------------------------
// Server
// ----------------------------------------

app.listen(3000, function() {
  console.log('Serving at http://localhost:3000');
});

