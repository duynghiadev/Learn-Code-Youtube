import React from 'react'
import { connect } from 'react-redux'
import { startAddTickets,startGetTickets,startDeleteTickets } from '../../actions/ticketsAction'
import {filterEmpByDept } from '../../selectors/ticketFindEdit'
import { findCust } from '../../selectors/custFindEdit'
import { findDept } from '../../selectors/deptFindEdit'
import { selectEmpName,selectEmployeesByDepartment } from '../../selectors/empFindEdit'
import departmentReducer from '../../reducers/departmentReducer'
import { Link } from 'react-router-dom'

class Tickets extends React.Component{
    constructor(props){
        super(props) 
        this.state ={
            code: '',
            customer: '',
            department: '',
            employees:[],
            message:'',
            priority:'',            
            addticket:false,
            empArray:[],
            search:''
        } 
    }

    componentDidMount() {
        this.props.dispatch(startGetTickets())  
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const { code, customer, department, employees, priority, message} = this.state 
        const formData = { code, customer, department, priority, message }
        formData.employees = employees.map(emp => ({ employee: emp }))

        this.props.dispatch(startAddTickets(formData))
        this.setState({
            code:'',
            customer:'',
            department:'',
            selectedEmp:[],
            message:''  ,
            priority:'',
            addticket:false,
            search:''
        })
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleDepartmentChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            employees: []
        })
    }

    handleEmployeeSelection = (e) => {
        const id = e.target.value 
        if(!this.state.employees.includes(id)) {
            this.setState((prevState) => {
                return {
                    employees: prevState.employees.concat(id)
                }
            })
        }
    }   

    handleCheckBox=(id) =>{
        this.props.dispatch(startDeleteTickets(id))
    }
    
    handleAddTicket = () => {
        this.setState({addticket : true})
    }

    handleTicketShow = (id) =>{
        this.props.history.push('/TicketShow')
        localStorage.setItem('ticketId',id)
    }

    showEmployees =(tick) =>{
        const empids = tick.employees.map(emp => emp.employee)
        let employees =[]
        if(this.props.employee.length !== 0){
            employees = empids.map((empId) => (this.props.employees.find(emp => emp._id === empId))?.name)
        }
        return employees.join(',')
    }

    render(){
        return (
            <div>
                <h2>Tickets - {this.props.tickets.length}</h2>
                <input type="text" value={this.state.search} onChange={this.handleChange} name="search" placeholder="enter code" />
                <table border="1">
                    <thead>
                        <tr> 
                            <th> SL.No </th>
                            <th> Code </th>
                            <th> Customer </th>
                            <th> Department </th>
                            <th> Employees </th>
                            <th> Message  </th>
                            <th> Priority </th>
                            <th> Actions </th>
                            <th> Remove </th>
                            <th> Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.tickets.filter(tick => tick.code.includes(this.state.search)).map(ticket => {
                            const employeeNames = selectEmpName(this.props.employees, ticket.employees.map(emp => emp.employee))
                            return (
                                    <tr key= {ticket._id}>
                                        <td> {ticket._id} </td>
                                        <td> {ticket.code} </td>
                                        <td> <Link to={`/customers/${ticket.customer}`}></Link>{findCust(this.props.customers,ticket.customer)?.name}</td>
                                        <td> {findDept(this.props.departments,ticket.department)?.name}</td>
                                        <td> {employeeNames.join(', ')}</td>
                                        <td> {ticket.message} </td>
                                        <td> {ticket.priority}</td>
                                        <td><button onClick= {() =>{this.handleTicketShow(ticket._id)}} className='show_button'>Show</button></td>
                                        <td><button onClick= {() =>{this.props.dispatch(startDeleteTickets(ticket._id))}} className='remove_button'>Remove</button></td>
                                        <td><input type="checkbox" id="completed"  onChange={() =>{this.handleCheckBox(ticket._id)}}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
                <br/>
            
                <button onClick ={this.handleAddTicket} name="addticket" className='button'>Add Tickets</button>
                
                {this.state.addticket &&  (
                <form onSubmit={this.handleSubmit} className='form'>
                    <label htmlFor="code">Code</label>
                    <input type="text" 
                    value ={this.state.code} 
                    className='input'
                    id="code"
                    name="code"
                    onChange={this.handleChange}/>
                    <br/>

                    <label htmlFor="customer">Customer</label>
                    <select 
                    value={this.state.customer} 
                    name="customer" 
                    className='input'
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
                    <select 
                    value={this.state.department} 
                    name="department" 
                    className='input'
                    onChange ={this.handleDepartmentChange}>

                    <option value ="">Select</option>
                    {   
                        this.props.departments.map((dept)=>{
                        return <option key = {dept._id} value = {dept._id}> {dept.name} </option>
                        })
                    }
                    </select>
                    <br/>

                    <label htmlFor="employees">Employees</label>
                    <select value={this.state.employees} onChange={this.handleEmployeeSelection} name="employees" multiple={true}>
                        <option value="">select</option>
                        {selectEmployeesByDepartment(this.props.employees, this.state.department).map((employees) => {
                            return <option value={employees._id} key={employees._id}>{employees.name}</option>
                        })}
                    </select>
                    <br/>

                    <label htmlFor="message">Message</label>
                    <textarea
                    value ={this.state.message} 
                    id="message"
                    name="message"
                    className='input'
                    onChange={this.handleChange}>
                    </textarea>
                    <br />

                    <label htmlFor="priority">Priority :</label>
                    <br/>
                    <label htmlFor="high">High</label>
                    <input type ="radio" 
                    value='high'
                    name='priority' 
                    checked ={this.state.priority =='high'} 
                    onChange={this.handleChange} 
                    ></input>
                    <br/>      
                    <label htmlFor ="medium">Medium</label>
                    <input type ="radio"
                    value='medium' 
                    name='priority'
                    checked ={this.state.priority =='medium'} 
                    onChange={this.handleChange} 
                    ></input>
                    <br/> 
                    <label htmlFor ="low">Low</label>
                    <input type ="radio"
                    value='low'
                    name='priority' 
                    checked ={this.state.priority =='low'} 
                    onChange={this.handleChange} 
                    ></input>
                    <br /> 
                    <input 
                    type='submit'
                    value='Submit'
                    className='button'
                     />
                </form>)}
            
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        tickets :    state.tickets,
        customers:   state.customers,
        departments: state.departments,
        employees:   state.employees
    }
 }

export default connect(mapStateToProps)(Tickets)