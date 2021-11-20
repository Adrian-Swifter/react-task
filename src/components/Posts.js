import React, { useState, useEffect } from "react";
import Post from "./post/Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/post", {
      method: "GET",
      headers: {
        "app-id": "61942b303923f1ec0255c886",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data);
      });
  }, []);
  console.log(posts);
  return (
    <section>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.text}
          date={post.publishDate}
          creator={post.owner}
          contentPreview={post.text}
          tags={post.tags}
        />
      ))}
    </section>
  );
}

export default Posts;
