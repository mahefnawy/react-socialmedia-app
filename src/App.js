import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Postlist from './components/Postlist/Postlist.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App main-div">
        <Header />
        <Jumbotron />
        <Postlist />
        <Footer />
      </div>
    );
  }
}

export default App;
