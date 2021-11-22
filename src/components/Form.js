import React from "react";
import { useLocation } from "react-router";

function Form({ post }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <form className="form">
      <fieldset>
        <label>
          <p>Image URL</p>
          <input
            name="image-url"
            defaultValue={pathname === "/create" ? "" : post.image}
          />
        </label>
      </fieldset>

      <fieldset>
        <label>
          <p>Post text content</p>
          <input
            name="text-content"
            defaultValue={pathname === "/create" ? "" : post.text}
          />
        </label>
      </fieldset>

      <fieldset>
        <label>
          <p>Post tags</p>
          <input
            name="post-tags"
            defaultValue={
              pathname === "/create" ? "" : post.tags.map((tag) => tag)
            }
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
