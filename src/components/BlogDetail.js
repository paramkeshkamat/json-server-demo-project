import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Loading from "./Loading";
import ModalForm from "./ModalForm";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
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
      <div className="buttons">
        <button className="edit-btn" onClick={() => setShowModal(true)} title="edit">
          <FaPencilAlt />
        </button>
        <button className="delete-btn" onClick={deleteBlog} title="delete">
          <FaTrashAlt />
        </button>
      </div>
      {showModal && <ModalForm setShowModal={setShowModal} blog={blog}/>}
    </div>
  );
};

export default BlogDetail;
