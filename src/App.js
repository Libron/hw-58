import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Modal from "./UI/Modal/Modal";
import ArticleInfo from "./components/Articles/ArticleInfo/ArticleInfo";
import Alerts from "./components/Alerts/Alerts";

class App extends Component {
    state = {
        modalShow: false,
        modalInfo: null
    };
    
    opened = (event, info) => {
        event.preventDefault();
        this.setState({modalShow: true, modalInfo: info});
    };

    closed = () => {
        this.setState({modalShow: !this.state.modalShow});
    };

  render() {
    return (
      <div className="App">
          <Modal
              show={this.state.modalShow}
              closed={this.closed}
              title={this.state.modalInfo ? this.state.modalInfo.title : 'Article Info'}
          >
              <ArticleInfo info={this.state.modalInfo}/>
          </Modal>

        <Header />
        <Articles showInfo={(event, info) => this.opened(event, info)} />
        <Alerts />
        <Footer />
      </div>
    );
  }
}

export default App;
