import React from 'react'
import { connect } from 'react-redux'
import { startRegisterUser } from '../../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props) 
        this.state ={
            username: '',
            email: '',
            password: ''
        }    

    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const redirect = () => {
            return this.props.history.push('/users/login')
        }

        this.props.dispatch(startRegisterUser(formData,redirect))    
        //this.props.dispatch(startRegisterUser(formData,this.props))    
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit} className='form'>
                    <label htmlFor="username">username</label>
                    <input type="text" 
                    value ={this.state.username} 
                    className='input'
                    id="username"
                    name="username"
                    onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="email">email</label>
                    <input type="text" 
                    value ={this.state.email}
                    className='input' 
                    id="email"
                    name="email"
                    onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="password" >password</label>
                    <input type="password" 
                    value ={this.state.password} 
                    className='input'
                    id ="password"
                    name="password"
                    onChange={this.handleChange} />
                    <br/>

                    <input 
                    type='submit'
                    value="register" 
                    className='button'/>
                </form>
            </div>
        )
    }
}


export default connect()(Register)