import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import Trending from './Trending.js'
import Categories from './Categories.js'
import SignUp from './SignUp.js'
import Navbar from './Navbar.js'
import SignIn from './SignIn.js'
import Default from './Default.js'
import Search from './Search.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route component={Navbar} /> 
            <Switch>
            <Route exact path={'/home'} component={Home} /> 
            <Route exact path={'/trending'} component={Trending} /> 
            <Route exact path={'/categories'} component={Categories} /> 
            <Route exact path={'/signup'} component={SignUp} />  
            <Route exact path={'/signin'} component={SignIn} /> 
            <Route exact path={'/search'} component={Search} /> 
            <Route component={Default} /> 
            </Switch>
        </BrowserRouter>
            
        
    )
}