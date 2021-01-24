import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Error.css";

const Error404 = () => {
  const history = useHistory();
  return (
    <div className="Error404">
      <h1>Error 404!</h1>
      <p>Oops! Page not found!</p>
      <button className="error-btn" onClick={() => history.push("/")}>
        Go back to home page
      </button>
    </div>
  );
};

export default Error404;
