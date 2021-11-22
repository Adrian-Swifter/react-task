import React from "react";
import { useParams } from "react-router-dom";
import useDummyAPI from "../hooks/useDummyAPI";
import heart from "../assets/images/heart.png";
function SinglePost() {
  const { id } = useParams();
  const baseUrl = "https://dummyapi.io/data/v1/post";

  const comments = useDummyAPI(baseUrl, id, "comment", "GET");

  const post = useDummyAPI(baseUrl, id, "", "GET");

  const localizeDateAndTime = (datetimestring) => {
    return new Date(datetimestring).toLocaleString();
  };
  return (
    <>
      {post.length === 0 ? (
        <h1>Loading post...</h1>
      ) : (
        <article className="single-post">
          <h2 className="single-post-title">Single Post Title</h2>
          <div>
            <img className="featured-image" src={post.image} alt="" />
          </div>
          <div className="single-post-metadata">
            <div className="creator-date-wrapper">
              <div className="creator-image">
                <img src={post.owner.picture} alt="" />
              </div>
              <button>
                {post.owner.firstName} {post.owner.lastName}
              </button>
              <button>{localizeDateAndTime(post.publishDate)}</button>
            </div>
            <div className="likes-wrapper">
              <span className="likes-icon">
                <img src={heart} alt="" />
              </span>
              <span className="likes-count">{post.likes}</span>
            </div>
          </div>
          <div className="single-post-content">
            <p>{post.text}</p>
          </div>
          <div className="single-post-tags">
            {post.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
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
                      <button>
                        {localizeDateAndTime(comment.publishDate)}
                      </button>
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

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default SinglePost;
