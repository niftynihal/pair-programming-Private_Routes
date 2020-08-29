import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Dashboard from '../Components/Dashboard'
import Settings from '../Components/Settings'


function Routes(){
    return(
        <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/login" exact component = {Login}/>
            <Route path="/dashboard" exact component = {Dashboard}/>
            <Route path="/dashboard/settings" component = {Settings}/>
        </Switch>
       
    )
}

export default Routes