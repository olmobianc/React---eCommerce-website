import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Shop from './Shop'
import About from './About'
import Pdp from './Pdp'

function Main() {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/shop' component={Shop}></Route>
            <Route path='/pdp/:productTitle' component={Pdp}></Route>
            <Route exact path='/about' component={About}></Route>
        </Switch>
    )
}

export default Main