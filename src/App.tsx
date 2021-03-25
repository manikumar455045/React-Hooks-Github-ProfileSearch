import React from 'react';
import "./App.css";
import GithubProfile from "./Components/GithubProfile";
import GithubSearchPanel from "./Components/GithubSearchPanel";





let App  = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-bold">GitHub profile with Hooks</a>
            </div>
        </nav>
        <GithubSearchPanel/>
        </React.Fragment>
  );
}

export default App;
