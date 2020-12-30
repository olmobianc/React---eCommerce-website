import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  handleCallback = (childData) => {
    this.setState({
      data: childData
    })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Main parentCallback = {this.handleCallback}/>
          <Footer />
      </div>
    )
  }
  
}

export default App
