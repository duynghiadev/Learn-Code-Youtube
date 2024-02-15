import React from 'react'
import { connect } from 'react-redux'
import { startEditEmployee } from '../../actions/employeeAction'
import { findEmp } from '../../selectors/empFindEdit'
import { findDept } from '../../selectors/deptFindEdit'

class EmpShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            mobile: '',
            department:'',
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
                name: this.props.employees.name,
                email: this.props.employees.email,
                mobile: this.props.employees.mobile,
                department: (findDept(this.props.departments,this.props.employees.department)).name,
                editStatus : true})
        )
    }

    handleEditSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }
        this.props.dispatch(startEditEmployee(this.props.employees._id,formData))
        this.setState({
            name:'',
            email:'',
            mobile:'',
            department:'',
            editStatus:false
        })
    }

    render(){
        return (
            <div>
                <button onClick= {this.handleEdit}>Edit</button>

                {this.state.editStatus && (
                <form onSubmit= {this.handleEditSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" 
                value= {this.state.name} 
                id="name"
                name="name"
                onChange= {this.handleChange}/>
                <br/>
                
                <label htmlFor="email">Email</label>
                <input type="text" 
                value= {this.state.email} 
                id="email"
                name="email"
                onChange= {this.handleChange} />
                <br/>

                <label htmlFor="mobile">Mobile</label>
                <input type="number" 
                value= {this.state.mobile} 
                id ="mobile"
                name="mobile"
                onChange= {this.handleChange} />
                <br/>

                <label htmlFor="department">Department</label>
                    <select value={this.state.department} 
                    name="department" 
                    onChange ={this.handleChange} >

                    <option value ="">Select</option>
                    {   
                        this.props.departments.map((dept)=>{
                        return <option key = {dept._id} value = {dept.name}> {dept.name} </option>
                        })
                    }
                    </select>
                 <br/>

                <input 
                type='submit'
                value='Update'
                />
            </form>)}
        </div>
        )
    
    }
}

const mapStateToProps = (state) =>{
    const empId = localStorage.getItem('empId')
    return {
        employees: findEmp(state.employees,empId),
        departments: state.departments
    }
}

export default connect(mapStateToProps)(EmpShow)