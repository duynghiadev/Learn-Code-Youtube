import React from 'react'
import { connect } from 'react-redux'
import { startEditCustomer } from '../../actions/customerAction'
import { findCust } from '../../selectors/custFindEdit'

class CustShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            mobile: '',
            editStatus:false
        }
    }
    
    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleEdit = () =>{
        return(   
            this.setState({
                name: this.props.customers.name,
                email: this.props.customers.email,
                mobile: this.props.customers.mobile,
                editStatus : true})
        )
    }

    handleEditSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.dispatch(startEditCustomer(this.props.customers._id,formData))
        this.setState({
            name:'',
            email:'',
            mobile:'',
            editStatus:false
        })
    }

    render(){
        return (
            <div>
                <button onClick= {this.handleEdit} className='button'>Edit</button>

                {this.state.editStatus && (
                <form onSubmit= {this.handleEditSubmit} className='form'>
                <label htmlFor="name">Name</label>
                <input type="text" 
                value= {this.state.name} 
                className='input'
                id="name"
                name="name"
                onChange= {this.handleChange}/>
                <br/>
                
                <label htmlFor="email">Email</label>
                <input type="text" 
                value= {this.state.email} 
                className='input'
                id="email"
                name="email"
                onChange= {this.handleChange} />
                <br/>

                <label htmlFor="mobile">Mobile</label>
                <input type="number" 
                value= {this.state.mobile} 
                className='input'
                id ="mobile"
                name="mobile"
                onChange= {this.handleChange} />
                <br/>

                <input 
                type='submit'
                value='Update'
                className='button'
                />
            </form>)}
        </div>
        )
    
    }
}

const mapStateToProps = (state) =>{
    const custId = localStorage.getItem('custId')
    return {
        customers: findCust(state.customers,custId)
    }
}

export default connect(mapStateToProps)(CustShow)