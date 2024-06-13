import React from 'react'
import { connect } from 'react-redux'
import { startEditDepartment } from '../../actions/departmentAction'
import { findDept } from '../../selectors/deptFindEdit'

class DeptShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
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
                name: this.props.departments.name,
                editStatus : true})
        )
    }

    handleEditSubmit =(e) =>{
        e.preventDefault()
        const formData ={
            name: this.state.name
        }
        this.props.dispatch(startEditDepartment(this.props.departments._id,formData))
        this.setState({
            name:'',
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
    const deptId = localStorage.getItem('deptId')
    return {
        departments: findDept(state.departments,deptId)
    }
}

export default connect(mapStateToProps)(DeptShow)