import React from 'react'
import { connect } from 'react-redux'
import { startAddDepartment,startGetDepartment,startDeleteDepartment } from '../../actions/departmentAction'

class Departments extends React.Component{
    constructor(props){
        super(props) 
        this.state ={
            name: '',
            adddept:false
        } 
        this.props.dispatch(startGetDepartment())
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            name: this.state.name
        }
        console.log(formData)
        this.props.dispatch(startAddDepartment(formData))
        this.setState({
            name:'',
            adddept:false
        })
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAddDept = () => {
        this.setState({adddept : true})
    }

    handleDeptShow = (id) =>{
        this.props.history.push('/department/DeptShow')
        localStorage.setItem('deptId',id)
    }
    
    render(){
        return (
            <div class="table-wrapper">
                <h2>Departments - {this.props.departments.length}</h2>
                <table border="1" class="fl-table">
                    <thead>
                        <tr> 
                            <th> SL.No </th>
                            <th> Department Name </th>
                            <th> Actions </th>
                            <th> Remove </th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                           this.props.departments.map((dept) =>{
                                return (
                                    <tr key = {dept._id}>
                                        <td> {dept._id} </td>
                                        <td> {dept.name} </td>
                                        <td><button onClick= {() =>{this.handleDeptShow(dept._id)}} className='show_button'>Show</button></td>
                                        <td><button onClick= {() =>{this.props.dispatch(startDeleteDepartment(dept._id))}} className='remove_button'>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
                <br/>
                <div>
                <button onClick={this.handleAddDept} name="adddept" className='button'>Add Department</button>
                
                {this.state.adddept &&  (
                <form onSubmit={this.handleSubmit}  className='form'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    value ={this.state.name}
                    className='input'
                    id="name"
                    name="name"
                    onChange={this.handleChange}/>
                    <br/>

                    <input 
                    type='submit'
                    value='Add'
                    className='button'
                     />
                </form>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        departments : state.departments
    }
 }

export default connect(mapStateToProps)(Departments)
