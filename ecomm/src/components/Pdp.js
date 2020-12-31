import React from "react"

import profile2 from "../images/profile2.jpg"
import { Link } from "react-router-dom"

import './Pdp.css'

class Pdp extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               price: this.props.productData
          }
     }
     
     render() {
          return (
               <div className="pdp-page">
                   <h3 className="filter-title">
                        <Link to="/shop" className="no-dec">All pictures</Link> <span>&#8250;</span> <a href="" className="no-dec">{this.props.match.params.productTitle}</a>
                    </h3>
                   <div className="pdp-container">
                       <div>
                            <img src={this.props.image} className="pdp-image"></img>
                       </div>
                       <div className="pdp-info-container">
                            <h3 className="pdp-title">{this.props.match.params.productTitle}</h3>
                            <p className="pdp-info-paragraph">€ {this.state.price}</p>
                            <p className="pdp-info-paragraph">{this.props.description}</p>
                            <button className="purchase-button">Purchase</button>
                       </div>
                   </div>
               </div>
           )
     }
}

export default Pdp;
