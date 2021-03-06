import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Loading from "./Loading";
import ModalForm from "./ModalForm";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const fetchBlog = async () => {
    const response = await axios.get(`http://localhost:5000/blogs/${id}`);
    setBlog(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteBlog = async () => {
    const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
    if (response.statusText === "OK") {
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
        <button
          className="edit-btn"
          onClick={() => setShowModal(true)}
          data-tip
          data-for="edit"
        >
          <FaPencilAlt />
        </button>
        <button
          className="delete-btn"
          onClick={deleteBlog}
          data-tip
          data-for="delete"
        >
          <FaTrashAlt />
        </button>
      </div>
      {showModal && (
        <ModalForm setShowModal={setShowModal} blog={blog} setBlog={setBlog} />
      )}
      <ReactTooltip id="edit" place="bottom" effect="solid">
        edit
      </ReactTooltip>
      <ReactTooltip id="delete" place="bottom" effect="solid">
        delete
      </ReactTooltip>
    </div>
  );
};

export default BlogDetail;
