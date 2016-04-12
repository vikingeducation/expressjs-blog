// ----------------------------------------
// Comments
// ----------------------------------------

var Comment = function(options) {
  this.author = options.author;
  this.body = options.body;

  this.render = function() {
    var $img = $('<img>')
      .attr('src', 'http://placehold.it/64x64');

    var $mediaLeft = $('<div>')
      .addClass('media-left');
    $mediaLeft.append($img);

    var $heading = $('<h4>')
      .addClass('media-heading')
      .html(options.author + ' commented: ');

    var $body = $('<p>')
      .html(options.body);

    var $mediaBody = $('<div>')
      .addClass('media-body');
    $mediaBody.append($heading);
    $mediaBody.append($body);

    var $comment = $('<div>')
      .addClass('media comment');

    $comment.append($mediaLeft);
    $comment.append($mediaBody);

    return $comment;
  };
};


Comment.create = function(options) {
  return new Comment(options)
    .render();
};


// ----------------------------------------
// Helper Functions
// ----------------------------------------

function addComment() {
  var $comment = Comment.create({
    author: $('#author').val(),
    body: $('#body').val()
  });
  $('#comments').prepend($comment);
}

function removeNoComments() {
  $('#no-comments').remove();
}

function setCommentFormSubmitListener() {
  $('#comment-form').on('submit', function(e) {
    e.preventDefault();
    removeNoComments();
    addComment();
    return false;
  });
}


// ----------------------------------------
// Event Listener
// ----------------------------------------

$(document).ready(function() {

  if ($('#posts-show').length) {
    setCommentFormSubmitListener();
  }

});



