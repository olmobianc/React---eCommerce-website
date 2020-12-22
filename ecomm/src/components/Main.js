import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Shop from './Shop';

function Main() {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/shop' component={Shop}></Route>
        </Switch>
    )
}

export default Main