import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Articles/>
      </div>
    );
  }
}

export default App;
