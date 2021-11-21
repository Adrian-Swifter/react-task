import React from "react";
import { useParams } from "react-router-dom";
import useDummyAPI from "../hooks/useDummyAPI";

function SinglePost() {
  const { id } = useParams();
  const baseUrl = "https://dummyapi.io/data/v1";
  const comments = useDummyAPI(baseUrl, id, "comment", "GET");

  const post = useDummyAPI(baseUrl, id, "", "GET");

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
              <div className="single-post-creator">
                <div className="creator-image">
                  <img src={post.owner.picture} alt="" />
                </div>
                <button>
                  {post.owner.firstName} {post.owner.lastName}
                </button>
              </div>
              <div className="singe-post-date">
                <button>{post.publishDate}</button>
              </div>
            </div>
            <div className="likes-wrapper">
              <span className="likes-icon">heart</span>
              <span className="likes-count">{post.likes}</span>
            </div>
          </div>
          <div className="single-post-content">
            <p>{post.text}</p>
          </div>
          <div className="single-post-tags">
            <button>tag1</button>
            <button>tag1</button>
            <button>tag1</button>
          </div>
          <div className="comments">
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
                      <button>{comment.publishDate}</button>
                    </div>
                    <div className="comment-message">
                      <p>{comment.message}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>There are no comments for this post.</h3>
            )}
          </div>
        </article>
      )}
    </>
  );
}

export default SinglePost;
