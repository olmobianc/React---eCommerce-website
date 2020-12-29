import React from "react"

import "./PictureCard.css"

import { Link } from "react-router-dom"

class PictureCard extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="picure-card-container" onClick={() => 
                this.props.handleClick(this.props.id, this.props.title, this.props.price, this.props.description, this.props.image)}>
                <Link to = {`/pdp/${this.props.title}`} className="no-dec">
                    <img src={this.props.image} className="picture-card-image"></img>
                    <h6 className="picture-card-title">{this.props.title}</h6>
                    <p className="picture-card-price">€ {this.props.price}</p>
                </Link>
            </div>
        )
    }
}

export default PictureCard