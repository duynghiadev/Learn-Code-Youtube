import axios from '../config/axios'

export const setDept =(dept) => {
    return {type: 'SET_DEPT',payload :dept}
}

export const deleteDept=(id) => {
    return {type: 'DELETE_DEPT', payload: id}
}

export const editDept=(id,dept) => {
    return {type: 'EDIT_DEPT', payload: id,payload1: dept}
}

export const startAddDepartment =(formData)=>{
    return(dispatch) => {
        axios.post('/departments',formData,
                    {headers:{
                    'x-auth':localStorage.getItem('authToken')
                    }})
            .then((response) => {
                if (response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('Added Department Successfully')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export const startGetDepartment=()=>{
    return(dispatch) => {
        axios.get('/departments', {
                headers:{
                'x-auth': localStorage.getItem('authToken')
                }
        })
        .then((response) =>{
            const departments = response.data
            dispatch(setDept(departments))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startDeleteDepartment = (deptId) =>{
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return(dispatch) => {
            axios.delete(`/departments/${deptId}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const departments = response.data
            dispatch(deleteDept(departments._id))
        })
        .catch((err)=>{
            alert(err)
        })
}}}

export const startEditDepartment = (deptId,formData) =>{
        return(dispatch) => {
            axios.put(`/departments/${deptId}`, formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const departments = response.data
            dispatch(editDept(departments._id,departments))
            alert('Updated Department Successfully')
        })
        .catch((err)=>{
            alert(err)
        })
}}
