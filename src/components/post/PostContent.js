import React from "react";

function PostContent({ post, heart, localizeDateAndTime }) {
  return (
    <>
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
    </>
  );
}

export default PostContent;
