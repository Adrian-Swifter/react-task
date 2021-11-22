import React from "react";
import { Link } from "react-router-dom";
import Post from "./routes/Post";
import useDummyAPI from "./hooks/useDummyAPI";

function Posts() {
  const posts = useDummyAPI("https://dummyapi.io/data/v1/post", "", "", "GET");

  const localizeDateAndTime = (datetimestring) => {
    return new Date(datetimestring).toLocaleString();
  };
  return (
    <section>
      <div className="add-new-post">
        <Link to={"/create"}>Add new post</Link>
      </div>

      {posts.map((post) => (
        <Link key={post.id} to={post.id}>
          <Post
            title={post.text}
            date={post.publishDate}
            creator={post.owner}
            contentPreview={post.text}
            tags={post.tags}
            localizeDateAndTime={localizeDateAndTime}
          />
        </Link>
      ))}
    </section>
  );
}

export default Posts;
