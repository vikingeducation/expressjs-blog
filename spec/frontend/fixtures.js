var FIXTURES = {
  commentForm: function() {
    var $author = $('<input>')
      .attr('id', 'author')
      .attr('type', 'text');

    var $body = $('<input>')
      .attr('id', 'body')
      .attr('type', 'text');

    var $submit = $('<input>')
      .attr('type', 'submit')
      .attr('value', 'Submit');

    return $('<form>')
      .attr('id', 'comment-form')
      .append($author)
      .append($body)
      .append($submit);
  },

  comments: function() {
    var $noComments = $('<p>')
      .attr('id', 'no-comments')
      .html('No comments yet');

    return $('<div>')
      .attr('id', 'comments')
      .append($noComments);
  }
};

