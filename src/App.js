import React, { Component } from 'react';
import PostForm from "./Components/PostForm";
import AllPost from "./Components/AllPost";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
        <div className="App card-body bg-light-grey align-items-center w-50 m-auto w-main">
            <PostForm></PostForm>
            <AllPost></AllPost>
        </div>
    );
  }
}
export default App;
