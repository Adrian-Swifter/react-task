import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost(props) {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/post/${id}/comment`, {
      method: "GET",
      headers: {
        "app-id": "61942b303923f1ec0255c886",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setComments(res.data);
      });
  }, [id]);
  console.log(comments);

  return (
    <article className="single-post">
      <h2 className="single-post-title">Single Post Title</h2>
      <div>
        <img
          className="featured-image"
          src="https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg"
          alt=""
        />
      </div>
      <div className="single-post-metadata">
        <div className="creator-date-wrapper">
          <div className="single-post-creator">
            <div className="creator-image">
              <img src="https://randomuser.me/api/portraits/women/58.jpg" alt=""/>
            </div>
            <button>Creator name</button>
          </div>
          <div className="singe-post-date">
            <button>10/20/2021</button>
          </div>
        </div>
        <div className="likes-wrapper">
          <span className="likes-icon">heart</span>
          <span className="likes-count">100</span>
        </div>
      </div>
      <div className="single-post-content">
        <p>
          Neki tekst bla bla bla bla. Neki tekst bla bla bla bla. Neki tekst bla
          bla bla bla. Neki tekst bla bla bla bla. Neki tekst bla bla bla bla.
          Neki tekst bla bla bla bla.
        </p>
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
                <img src={comment.owner.picture} alt=""/>
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
  );
}

export default SinglePost;
