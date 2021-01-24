import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import Loading from "./Loading";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:5000/blogs");
    setBlogs(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (blogs.length < 1) {
    return <h2 className="error-text">No blogs to show...</h2>;
  }

  return (
    <div className="Home">
      <h1>Blogs</h1>
      <div className="blogs">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
