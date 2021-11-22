import React from "react";

function Comments({ comments, localizeDateAndTime }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Functionality not working at the moment...");
  };

  return (
    <div className="comments">
      <h3 className="comments-count">
        {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
      </h3>
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-image">
              <img src={comment.owner.picture} alt="" />
            </div>
            <div className="comment-content">
              <div className="comment-meta">
                <button>
                  {comment.owner.firstName} {comment.owner.lastName}
                </button>
                <button>{localizeDateAndTime(comment.publishDate)}</button>
              </div>
              <div className="comment-message">
                <p>{comment.message}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className="no-comments">There are no comments for this post.</h3>
      )}
      <div className="submit-comment">
        <form>
          <textarea placeholder="Write a new comment" />

          <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)}/>
        </form>
      </div>
    </div>
  );
}

export default Comments;
