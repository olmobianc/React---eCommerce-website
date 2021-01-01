import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      productId: "",
      productTitle: "",
      productPrice: "",
      productDescription: "",
      productImage: ""
    }
  }

  handleCallback = (id, name, price, description, image) => {
    this.setState({
      productId: id,
      productTitle: name,
      productPrice: price,
      productDescription: description,
      productImage: image
    })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Main 
            parentCallback = {this.handleCallback}
            productDescription = {this.state.productDescription} 
            productPrice = {this.state.productPrice}
            productImage = {this.state.productImage}
          />
          <Footer />
      </div>
    )
  }
  
}

export default App
