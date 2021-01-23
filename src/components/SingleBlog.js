import React from "react";
import { useHistory } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const history = useHistory();
  const { id, title, body, author } = blog;
  return (
    <div
      className="SingleBlog"
      onClick={() => {
        history.push(`/blogs/${id}`);
      }}
    >
      <h3 className="blog-title">{title}</h3>
      <p className="blog-body">
        {body.split("").length < 50
          ? body
          : `${body.split("").slice(0, 60).join("")}...`}
      </p>
      <p className="blog-author">- by {author}</p>
    </div>
  );
};

export default SingleBlog;
