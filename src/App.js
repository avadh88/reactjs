import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';


class App extends Component {
  constructor(){
    super();
    this.state={
      title:"welcome",
    }
  }
  changeTitle(title){
    this.setState({title});
  }
  render() {
    return (

      <div className="App">
        <Header />
        <Layout title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
        <Footer />
      </div>
    );
  }
}

export default App;
