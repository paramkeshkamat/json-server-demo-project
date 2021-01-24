import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import axios from "axios";

const ModalForm = ({ setShowModal, blog, setBlog }) => {
  const [title, setTitle] = useState(blog.title);
  const [author, setAuthor] = useState(blog.author);
  const [body, setBody] = useState(blog.body);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { id: blog.id, title, author, body };
    const response = await axios.put(`http://localhost:5000/blogs/${blog.id}`, newBlog);
    if (response.statusText === "OK") {
      history.push(`/blogs/${blog.id}`);
    }
    setBlog(newBlog);
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <h2>Add a blog</h2>
          <label>Title:</label>
          <input
            type="text"
            placeholder="title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label>Author:</label>
          <input
            type="text"
            placeholder="author..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <br />
          <label>Body:</label>
          <textarea
            placeholder="body..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <button className="close-modal-btn" onClick={() => setShowModal(false)}>
          <VscClose />
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
