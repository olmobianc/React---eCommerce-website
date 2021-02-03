import React from "react"
import PictureCard from "./PictureCard"

import profile2 from "../images/profile2.jpg"
import pic1 from "../images/Benbulben covered with Snow.jpg"
import pic2 from "../images/athlone bridge at night.jpg"
import pic3 from "../images/Bundoran Winter Snow.jpg"
import pic4 from "../images/Carton House Maynooth - 6365-Modifica.jpg"
import pic5 from "../images/Dublin bridge.jpg"
import pic6 from "../images/Giant's Causeway Golden Light.jpg"
import pic7 from "../images/Glendalough Wicklow bw.jpg"
import pic8 from "../images/Glendalough Wicklow mist.jpg"
import pic9 from "../images/Glendalough Wicklow.jpg"
import pic10 from "../images/hook head lighthouse.jpg"
import pic11 from "../images/Mount Errigal bush.jpg"
import pic12 from "../images/Mount Errigal Lake.jpg"
import pic13 from "../images/Mount Errigal Panoramic.jpg"
import pic14 from "../images/Mullaghmore Purple Sky Ireland.jpg"
import pic15 from "../images/Pine Island Connemara.jpg"
import pic16 from "../images/Runner in Mullaghmore at Sunset.jpg"
import pic17 from "../images/servizio fotografico senza titolo - 04 aprile 2019 - 7263.jpg"
import pic18 from "../images/servizio fotografico senza titolo - 15 aprile 2018 - 4756.jpg"
import pic19 from "../images/servizio fotografico senza titolo - 23 settembre 2018 - 6227.jpg"
import pic20 from "../images/servizio fotografico senza titolo - 27 aprile 2020 - 8118-Modifica-Modifica.jpg"
import pic21 from "../images/servizio fotografico senza titolo - 28 ottobre 2018 - 6311.jpg"
import pic22 from "../images/Strandhill Sligo Sunset.jpg"
import pic23 from "../images/untitled shoot - gennaio 28, 2017 - 9425-Modifica.jpg"
import pic24 from "../images/untitled shoot - marzo 05, 2017 - 0315 0317.jpg"


import { Link } from "react-router-dom"

import './Shop.css'

class Shop extends React.Component {
     constructor() {
          super()
          this.handleClick = this.handleClick.bind(this)
     }

     handleClick(id, name, price, description, image) {
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
                            image={pic22}
                            title="Strandhill Cannon Susnet"
                            price="20"
                            description="Colourful sunset at the cannon of Strandhill during lockdown"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="2"
                            image={pic3}
                            title="Bundoran in Winter"
                            price="20"
                            description="Snowy mountains view behind Bundoran colourful houses"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="3"
                            image={pic16}
                            title="Mullaghmore Runner"
                            price="20"
                            description="Being active during lockdown in County Sligo"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="4"
                            image={pic15}
                            title="Pine Island"
                            price="20"
                            description="Connemara Iconic Pine Island view on a colourful Morning"
                            handleClick={this.handleClick}
                       />
                       <PictureCard 
                            id="5"
                            image={pic6}
                            title="Giant's Causeway Gold"
                            price="20"
                            description="Giant’s Causeway view at Golden Hour"
                            handleClick={this.handleClick}
                       />
                       <PictureCard 
                            id="6"
                            image={pic13}
                            title="Mount Errigal Panoramic"
                            price="20"
                            description="Panoramic view of Mount Errigal from Dunlewy Lough"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="7"
                            image={pic11}
                            title="Mount Errigal and a Bush"
                            price="20"
                            description="Mount Errigal view from Dunlewy Lough with Bush"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="8"
                            image={pic12}
                            title="Mount Errigal"
                            price="20"
                            description="Mount Errigal view from Dunlewy Lough"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="9"
                            image={pic8}
                            title="Glendalough Wicklow mist"
                            price="20"
                            description="Glendalough Wicklow log in the mist"
                            handleClick={this.handleClick}
                       />
                       <PictureCard 
                            id="10"
                            image={pic7}
                            title="Glendalough Wicklow BW"
                            price="20"
                            description="Glendalough Wicklow in Black and White"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="11"
                            image={pic9}
                            title="Glendalough Wicklow"
                            price="20"
                            description="Glendalough Wicklow at sunset"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="12"
                            image={pic10}
                            title="Hook Head Lighthouse"
                            price="20"
                            description="Hook Head Lighthouse long exposure"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="13"
                            image={pic5}
                            title="Samuel Beckett Bridge"
                            price="20"
                            description="Traffic at Night in Dublin on Samuel Beckett Bridge"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="14"
                            image={pic4}
                            title="Carton House"
                            price="20"
                            description="Maynooth Golf Club"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="15"
                            image={pic1}
                            title="Benbulben covered with Snow"
                            price="20"
                            description="A snowy Benbulben reflected on the lagoon by Streedagh beach"
                            handleClick={this.handleClick}
                       />
                       <PictureCard
                            id="16"
                            image={pic2}
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
