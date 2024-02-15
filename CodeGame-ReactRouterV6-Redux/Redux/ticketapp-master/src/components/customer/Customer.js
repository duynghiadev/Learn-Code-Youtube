import React from 'react'
import { connect } from 'react-redux'
import { startAddCustomer,startGetCustomer,startDeleteCustomer } from '../../actions/customerAction'
import '../style.css'
 
class Customer extends React.Component{
    constructor(props){
        super(props) 
        this.state ={
            name: '',
            email: '',
            mobile: '',
            addcust:false
        } 
        this.props.dispatch(startGetCustomer())  
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            name:   this.state.name,
            email:  this.state.email,
            mobile: this.state.mobile
        }
        console.log(formData)
        this.props.dispatch(startAddCustomer(formData))
        this.setState({
            name:'',
            email:'',
            mobile:'',
            addcust:false
        })
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAddCust = () => {
        this.setState({addcust : true})
    }

    handleCustShow = (id) =>{
        this.props.history.push('/customer/CustShow')
        localStorage.setItem('custId',id)
    }
    
    render(){
        return (
            <div class="table-wrapper">
                <h2>Customers - {this.props.customers.length}</h2>
                <table border="1" class="fl-table">
                    <thead>
                        <tr> 
                            <th>SL.No</th>
                            <th> Customer Name </th>
                            <th> Email </th>
                            <th> Mobile Number </th>
                            <th> Actions </th>
                            <th> Remove </th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                           this.props.customers.map((cust) =>{
                                return (
                                    <tr key={cust._id}>
                                        <td> {cust._id} </td>
                                        <td> {cust.name} </td>
                                        <td> {cust.email} </td>
                                        <td> {cust.mobile} </td>
                                        <td><button onClick= {() =>{this.handleCustShow(cust._id)}} className='show_button'>Show</button></td>
                                        <td><button onClick= {() =>{this.props.dispatch(startDeleteCustomer(cust._id))}} className='remove_button'>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
                <br/>
                <div>
                <button onClick={this.handleAddCust} name="addcust" className="button">Add Customer</button>
                
                {this.state.addcust &&  (
                <form onSubmit={this.handleSubmit} className='form'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='input'
                    value ={this.state.name} 
                    id="name"
                    name="name"
                    onChange={this.handleChange}/>
                    <br/>
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className='input'
                    value ={this.state.email} 
                    id="email"
                    name="email"
                    onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" 
                    className='input'
                    value ={this.state.mobile} 
                    id ="mobile"
                    name="mobile"
                    onChange={this.handleChange} />
                    <br/>

                    <input 
                    type='submit'
                    value='Submit' 
                    className='button'
                     />
                </form>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        customers : state.customers
    }
 }

export default connect(mapStateToProps)(Customer)