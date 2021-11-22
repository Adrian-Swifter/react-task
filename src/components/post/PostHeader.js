import React from "react";
import { Link } from "react-router-dom";

function PostHeader({ id, post }) {
  return (
    <>
      <div className="link-wrapper">
        <Link to={`/${id}/edit`} state={{ post: post }}>
          Edit post
        </Link>
      </div>
      <div>
        <img className="featured-image" src={post.image} alt="" />
      </div>
    </>
  );
}

export default PostHeader;
