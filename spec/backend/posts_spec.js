var request = require('request');
var app = require('../../app');
var posts = require('../../data/posts');


describe('ExpressJS Blog', function() {
  var baseUrl = "http://localhost:8888";
  var server;

  beforeEach(function() {
    runs(function() {
      server = app.listen(8888);
    });
  });

  afterEach(function() {
    server.close();
    server = null;
  });

  describe('GET /', function() {
    it('returns a status code of 200', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('shows an index of blog posts', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(body).toMatch(posts[1].title);
        done();
      });
    });
  });


  describe('GET posts/:id', function() {
    it('shows a post when the id is valid', function(done) {
      request.get(baseUrl + '/posts/1', function(error, response, body) {
        expect(body).toMatch(posts[1].body);
        done();
      });
    });

    it('shows a 404 when the id is invalid', function(done) {
      request.get(baseUrl + '/posts/i-hacked-you', function(error, response, body) {
        expect(body).toMatch('404 Not Found');
        done();
      });
    });
  });


  describe('Invalid urls', function() {
    it('shows a 404 page', function(done) {
      request.get(baseUrl + '/i-no-exist', function(error, response, body) {
        expect(body).toMatch('404 Not Found');
        done();
      });
    });

    it('sets a status code of 404', function(done) {
      request.get(baseUrl + '/nope', function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });
});

