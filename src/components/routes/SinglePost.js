import React from "react";
import { useParams } from "react-router-dom";
import useDummyAPI from "../hooks/useDummyAPI";
import heart from "../assets/images/heart.png";
import PostHeader from "../post/PostHeader";
import PostContent from "../post/PostContent";
import Comments from "../Comments";

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
        <h1 className="loading-post">Loading post...</h1>
      ) : (
        <article className="single-post">
          <PostHeader id={id} post={post} />

          <PostContent
            post={post}
            localizeDateAndTime={localizeDateAndTime}
            heart={heart}
          />

          <Comments
            comments={comments}
            localizeDateAndTime={localizeDateAndTime}
          />
        </article>
      )}
    </>
  );
}

export default SinglePost;
