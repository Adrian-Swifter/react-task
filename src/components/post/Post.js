import React from "react";

function Post({ title, date, creator, contentPreview, tags }) {
  return (
    <article className="post">
      <header className="post-header">
        {/* Because there is no title property in the Dummy API post object, I decided to truncate text to first two words. */}
        <h2>
          {title.split(" ")[0]} {title.split(" ")[1]}
        </h2>
        <nav className="post-metadata">
          <ul>
            <li className="post-date">
              <button>{date}</button>
            </li>
            <li className="post-creator">
              <button>
                {creator.firstName} {creator.lastName}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <p className="post-excerpt">{contentPreview}</p>
      <footer className="post-tags">
        {/* For the purspose of clearing the error I put the index for the key */}
        {tags.map((tag, index) => (
          <button key={index}>{tag}</button>
        ))}
      </footer>
    </article>
  );
}

export default Post;
