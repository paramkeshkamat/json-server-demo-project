import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Loading from "./Loading";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  const fetchBlog = async () => {
    const response = await fetch(`http://localhost:5000/blogs/${id}`);
    const data = await response.json();
    setBlog(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteBlog = async () => {
    const response = await fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      history.push("/");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const { title, body, author } = blog;
  return (
    <div className="Blog">
      <h2 className="title">{title}</h2>
      <p className="body">{body}</p>
      <p className="author">- {author}</p>
      <button className="delete-btn" onClick={deleteBlog} title="delete">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default BlogDetail;
