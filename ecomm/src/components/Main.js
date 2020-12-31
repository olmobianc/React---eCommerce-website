import React from 'react'
import { Switch, Route } from 'react-router-dom'
        
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Pdp from './Pdp'
        
    function Main({parentCallback, productDescription, productPrice, productImage}) {
        return (
            <Switch> {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path='/' render = {(props) => (<Home parentCallback={parentCallback} {...props}/>)}/>
                <Route exact path='/shop' render = {(props) => (<Shop parentCallback={parentCallback} {...props}/>)}/>
                <Route exact path='/pdp/:productTitle' render = {(props) => (<Pdp 
                    parentCallback={parentCallback} 
                    productDescription={productDescription} 
                    productPrice={productPrice} 
                    productImage={productImage} 
                    {...props}/>)}/>
                <Route exact path='/about' render = {(props) => (<About parentCallback={parentCallback} {...props}/>)}/>
            </Switch>
        )
    }
        
export default Main