import React from 'react'
import { connect } from 'react-redux'
import { startEditTickets } from '../../actions/ticketsAction'
import { findCust } from '../../selectors/custFindEdit'
import { findDept } from '../../selectors/deptFindEdit'
import { findEmp } from '../../selectors/empFindEdit'
import { findTicket } from '../../selectors/ticketFindEdit'

class TicketShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:'',
            customer:'',
            department:'',
            employee:'',
            message:'',
            priority:'',
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
                code: this.props.tickets.name,
                customer: (findCust(this.props.customers,this.props.tickets.customer)).name,
                department: (findDept(this.props.departments,this.props.tickets.department)).name,
                employee: (findEmp(this.props.employees,this.props.tickets.employee)).name,
                message: this.props.tickets.message,
                priority: this.props.tickets.priority,
                editStatus : true})
        )
    }

    handleEditSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            code: this.state.code,
            customer: this.state.customer,
            department: this.state.department,
            employee: this.state.employee,
            message: this.state.message,
            priority: this.state.priority,
        }
        this.props.dispatch(startEditTickets(this.props.tickets._id,formData))
        this.setState({
            code:'',
            customer:'',
            department:'',
            employee:'',
            message:'',
            priority:'',   
            editStatus:false
        })
    }

    render(){
        return (
            <div>
                <button onClick= {this.handleEdit}>Edit</button>

            {this.state.editStatus && (
              <form onSubmit={this.handleSubmit}>
              <label htmlFor="code">Code</label>
              <input type="text" 
              value ={this.state.code} 
              id="code"
              name="code"
              onChange={this.handleChange}/>
              <br/>

              <label htmlFor="customer">Customer</label>
              <select value={this.state.customer} 
              name="customer" 
              onChange ={this.handleChange} >

              <option value ="">Select</option>
              {   
                  this.props.customers.map((cust)=>{
                  return <option key = {cust._id} value = {cust._id}> {cust.name} </option>
                  })
              }
              </select>
              <br/>

              <label htmlFor="department">Department</label>
              <select value={this.state.department} 
              name="department" 
              onChange ={this.handleChange} >

              <option value ="">Select</option>
              {   
                  this.props.departments.map((dept)=>{
                  return <option key = {dept._id} value = {dept._id}> {dept.name} </option>
                  })
              }
              </select>
              <br/>

              <label htmlFor="employee">Employees</label>
              <select value={this.state.employee} 
              name="employee" 
              onChange ={this.handleChange} >

              <option value ="">Select</option>
              {   
                  this.props.employees.map((emp)=>{
                  return <option key = {emp._id} value = {emp._id}> {emp.name} </option>
                  })
              }
              </select>
              <br/>

              <label htmlFor="message">Message</label>
              <textarea
              value ={this.state.message} 
              id="message"
              name="message"
              onChange={this.handleChange}>
              </textarea>
              <br/>

              <label htmlFor="priority">Priority</label>
              <br/>
              <label htmlFor="high">High</label>
              <input type ="radio" 
              value='high' 
              checked ={this.state.priority =='high'} 
              onChange={this.handleChange} 
              ></input>
              <br/>  

              <label htmlFor ="medium">Medium</label>
              <input type ="radio"
              value='medium' 
              checked ={this.state.priority =='medium'} 
              onChange={this.handleChange} 
              ></input>
              <br/> 

              <label htmlFor ="low">Low</label>
              <input type ="radio"
              value='low' 
              checked ={this.state.priority =='low'} 
              onChange={this.handleChange} 
              ></input>   
              <input 
              type='submit'
              value='Submit'
               />
          </form>)}
          </div>
        )
    
    }
}

const mapStateToProps = (state) =>{
    const ticketId = localStorage.getItem('ticketId')
    return {
        tickets:     findTicket(state.tickets,ticketId),
        customers:   state.customers,
        departments: state.departments,
        employees:   state.employees
    }
}

export default connect(mapStateToProps)(TicketShow)