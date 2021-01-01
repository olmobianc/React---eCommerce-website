import React from "react"
import PictureCard from "./PictureCard"

import profile2 from "../images/profile2.jpg"

import { Link } from "react-router-dom"

import './Shop.css'

class Shop extends React.Component {
     constructor() {
          super()
          this.handleClick = this.handleClick.bind(this)
     }

     handleClick(id, name, price, description, image) {
          console.log(image)
          this.props.parentCallback(id, name, price, description, image)
     }
     
     render() {
          return (
               <div className="shop-container">
                   <h3 className="filter-title"><Link to="/shop" className="no-dec">All pictures</Link></h3>
                   <ul className="shop-filter-list">
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Outdoors</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Galway</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Wicklow</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Dublin</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Midlands</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Northern Ireland</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Donegal</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Sligo</a></li>
                       <li className="shop-filter-element"><a href="" className="shop-elem-link">Ireland</a></li>
                   </ul>
                   <div className="shop-grid">
                       <PictureCard
                            id="1"
                            image={profile2}
                            title="Strandhill Cannon Susnet"
                            price="20"
                            description="Colourful sunset at the cannon of Strandhill during lockdown"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="2"
                            image={profile2}
                            title="Bundoran in Winter"
                            price="20"
                            description="Snowy mountains view behind Bundoran colourful houses"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="3"
                            image={profile2}
                            title="Mullaghmore Runner"
                            price="20"
                            description="Being active during lockdown in County Sligo"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="4"
                            image={profile2}
                            title="Pine Island"
                            price="20"
                            description="Connemara Iconic Pine Island view on a colourful Morning"
                            handleClick={this.handleClick}
                       />
                       <PictureCard 
                            id="5"
                            title="Giant's Causeway Gold"
                            price="20"
                            description="Giant’s Causeway view at Golden Hour"
                            handleClick={this.handleClick}
                       />
                       <PictureCard 
                            id="6"
                            title="Mount Errigal Panoramic"
                            price="20"
                            description="Panoramic view of Mount Errigal from Dunlewy Lough"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="7" 
                            title="Mount Errigal and a Bush"
                            price="20"
                            description="Mount Errigal view from Dunlewy Lough with Bush"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="8" 
                            title="Mount Errigal"
                            price="20"
                            description="Mount Errigal view from Dunlewy Lough"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="9" 
                            title="Glendalough Wicklow mist"
                            price="20"
                            description="Glendalough Wicklow log in the mist"
                            handleClick={this.handleClick}
                       />
                       <PictureCard 
                            id="10"
                            title="Glendalough Wicklow BW"
                            price="20"
                            description="Glendalough Wicklow in Black and White"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="11" 
                            title="Glendalough Wicklow"
                            price="20"
                            description="Glendalough Wicklow at sunset"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="12"
                            title="Hook Head Lighthouse"
                            price="20"
                            description="Hook Head Lighthouse long exposure"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="13"
                            title="Samuel Beckett Bridge"
                            price="20"
                            description="Traffic at Night in Dublin on Samuel Beckett Bridge"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="14"
                            title="Carton House"
                            price="20"
                            description="Maynooth Golf Club"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="15"
                            title="Benbulben covered with Snow"
                            price="20"
                            description="A snowy Benbulben reflected on the lagoon by Streedagh beach"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="16"
                            title="Athlone Bridge at Night"
                            price="20"
                            description="Athlone bridge reflected on a calm river Shannon at night"
                            handleClick={this.handleClick}
                       />
                   </div>
               </div>
           )
     }
}

export default Shop;
