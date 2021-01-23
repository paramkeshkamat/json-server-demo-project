import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import "../styles/Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const postBlog = async (newBlog) => {
    const response = await fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    });
    if (response.ok) {
      history.push("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { id: uuid(), title, author, body };
    postBlog(newBlog);
  };

  return (
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
  );
};

export default Create;
