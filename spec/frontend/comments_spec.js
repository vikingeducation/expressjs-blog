describe('Comments', function() {
  beforeEach(function() {
    var $commentForm = FIXTURES.commentForm();
    var $comments = FIXTURES.comments();
    $('body').eq(0)
      .append($commentForm)
      .append($comments);
    setCommentFormSubmitListener();
  });


  afterEach(function() {
    $('#comment-form').remove();
    $('#comments').remove();
  });


  it('Adds a comment to the comment list', function() {
    $('#author').val('Fred');
    $('#body').val('Nice post!');
    $('#comment-form').trigger('submit');
    expect($('.comment').length).toBe(1);
  });
});




