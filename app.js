var express = require('express');
var app = express();

// ----------------------------------------
// Config
// ----------------------------------------

app.set('view engine', 'ejs');


// ----------------------------------------
// Routes
// ----------------------------------------

app.get('/', function(request, response) {
  response.render('index');
});


// ----------------------------------------
// Server
// ----------------------------------------

app.listen(3000, function() {
  console.log('Serving at http://localhost:3000');
});

