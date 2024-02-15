import axios from '../config/axios'

export const setEmp =(employees) => {
    return {type: 'SET_EMP',payload :employees}
}

export const deleteEmp=(id) => {
    return {type: 'DELETE_EMP', payload:id}
}

export const editEmp=(id,employee) => {
    return {type: 'EDIT_EMP', payload:id,payload1:employee}
}

export const startAddEmployee =(formData)=>{
    return(dispatch) => {
        axios.post('/employees',formData,
                    {headers:{
                    'x-auth':localStorage.getItem('authToken')
                    }})
            .then((response) => {
                if (response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('Added Employee Successfully')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export const startGetEmployee =() =>{
    return(dispatch) => {
        axios.get('/employees', {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const employees = response.data
            dispatch(setEmp(employees))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startDeleteEmployee = (empId) =>{
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return(dispatch) => {
            axios.delete(`/employees/${empId}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const employees = response.data
            dispatch(deleteEmp(employees._id))
        })
        .catch((err)=>{
            alert(err)
        })
}}}

export const startEditEmployee = (empId,formData) =>{
        return(dispatch) => {
            axios.put(`/employees/${empId}`,formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const employees = response.data
            dispatch(editEmp(employees._id,employees))
            alert('Updated Employee Successfully')
        })
        .catch((err)=>{
            alert(err)
        })
}}
