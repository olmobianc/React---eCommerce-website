import React from "react"

import "./PictureCard.css"

class PictureCard extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="picure-card-container" onClick={() => this.props.handleClick(this.props.id)}>
                <img src={this.props.image} className="picture-card-image"></img>
                <h6 className="picture-card-title">{this.props.title}</h6>
                <p className="picture-card-price">€ {this.props.price}</p>
            </div>
        )
    }
}

export default PictureCard