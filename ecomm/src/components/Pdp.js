import React from "react"

import profile2 from "../images/profile2.jpg"

import './Pdp.css'

class Pdp extends React.Component {
     constructor() {
          super()
     }
     

     render() {
          return (
               <div className="pdp-page">
                   <h3 className="filter-title">All pictures/{this.props.title}</h3>
                   <div className="pdp-container">
                       <div>
                            img
                       </div>
                       <div>
                            <p>ciao</p>
                            <p>ciao</p>
                            <p>ciao</p>
                            <p>ciao</p>
                       </div>
                   </div>
               </div>
           )
     }
}

export default Pdp;
