import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/login">Login</Link>
                <br></br>
                <Link to="/dashboard">Dashboard</Link>
                <br></br>
                <Link to="/dashboard/settings">Dashboard Settings</Link>
            </div>
        )
    }
}

export default Navbar