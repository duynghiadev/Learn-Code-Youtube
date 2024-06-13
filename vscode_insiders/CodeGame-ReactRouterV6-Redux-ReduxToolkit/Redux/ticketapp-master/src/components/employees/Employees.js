import React from 'react'
import { connect } from 'react-redux'
import { startAddEmployee, startGetEmployee,startDeleteEmployee } from '../../actions/employeeAction'
import { findDept } from '../../selectors/deptFindEdit'

class Employees extends React.Component{
    constructor(props){
        super(props) 
        this.state ={
            name: '',
            email: '',
            mobile: '',
            department:'',
            addemp:false,
            deptname:''
        } 
        this.props.dispatch(startGetEmployee())  
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department:this.state.departments
        }
        console.log(formData)
        this.props.dispatch(startAddEmployee(formData))
        this.setState({
            name:'',
            email:'',
            mobile:'',
            department:'',
            addemp:false
        })
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAddEmp = () => {
        this.setState({addemp : true})
    }

    handleEmpShow = (id) =>{
        this.props.history.push('/EmpShow')
        localStorage.setItem('empId',id)
    }
    
    render(){
        return (
            <div class="table-wrapper">
                <h2>Employees - {this.props.employees.length}</h2>
                <table border="1" class="fl-table">
                    <thead>
                        <tr> 
                            <th>SL.No</th>
                            <th> Employee Name </th>
                            <th> Email </th>
                            <th> Mobile Number </th>
                            <th> Department </th>
                            <th> Actions </th>
                            <th> Remove </th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                           this.props.employees.map((emp) =>{
                                return (
                                    <tr key={emp._id}>
                                        <td> {emp._id} </td>
                                        <td> {emp.name} </td>
                                        <td> {emp.email} </td>
                                        <td> {emp.mobile} </td>
                                        <td> {findDept(this.props.departments,emp.department)?.name}</td>
                                        <td><button onClick= {() =>{this.handleEmpShow(emp._id)}} className='show_button'>Show</button></td>
                                        <td><button onClick= {() =>{this.props.dispatch(startDeleteEmployee(emp._id))}} className='remove_button'>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
                <br/>
                <div>
                <button onClick={this.handleAddEmp} name="addemp" className='button'>Add Employee</button>
                
                {this.state.addemp &&  (
                <form onSubmit={this.handleSubmit} className='form'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    value ={this.state.name} 
                    id="name"
                    className='input'
                    name="name"
                    onChange={this.handleChange}/>
                    <br/>
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    value ={this.state.email}
                    className='input'
                    id="email"
                    name="email"
                    onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" 
                    value ={this.state.mobile} 
                    id ="mobile"
                    className='input'
                    name="mobile"
                    onChange={this.handleChange} />
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
        employees  : state.employees,
        departments: state.departments
    }
 }

export default connect(mapStateToProps)(Employees)