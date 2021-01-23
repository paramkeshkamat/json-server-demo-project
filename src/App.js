import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetail from "./components/BlogDetail";
import About from "./components/About";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/blogs/:id" component={BlogDetail} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={Error404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
