import React from "react";
import { useLocation } from "react-router";
import Form from "../Form";

function EditSinglePost() {
  const location = useLocation();
  const { post } = location.state;
 
  return (
    <div className="edit-post">
      <h1>Edit post</h1>
      <Form post={post} />
    </div>
  );
}

export default EditSinglePost;
