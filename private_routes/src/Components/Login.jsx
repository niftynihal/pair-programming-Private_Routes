import React from 'react'


class Login extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            email : " ",
            password : " "
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = () => {
        if(this.state.email === "demo@masai.com" && this.state.password === "1234"){
            console.log("logging in")
        }
    }
    render(){
        return(
            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={this.handleChange}></input>
                <label>Password</label>
                <input type="password" name="password" onChange = {this.handleChange}></input>
                <button onClick = {this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Login