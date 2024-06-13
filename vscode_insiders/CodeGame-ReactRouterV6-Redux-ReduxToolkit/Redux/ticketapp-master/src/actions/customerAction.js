import axios from '../config/axios'

export const setCust =(customers) => {
    return {type: 'SET_CUST',payload :customers}
}

export const deleteCust=(id) => {
    return {type: 'DELETE_CUST', payload:id}
}

export const editCust=(id,cust) => {
    return {type: 'EDIT_CUST', payload:id,payload1:cust}
}

export const startAddCustomer =(formData)=>{
    return(dispatch) => {
        axios.post('/customers',formData,
                    {headers:{
                    'x-auth':localStorage.getItem('authToken')
                    }})
            .then((response) => {
                if (response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('Added Customer Successfully')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export const startGetCustomer =() =>{
    return(dispatch) => {
        axios.get('/customers', {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const customers = response.data
            dispatch(setCust(customers))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startDeleteCustomer = (custId) =>{
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return(dispatch) => {
            axios.delete(`/customers/${custId}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const customers = response.data
            dispatch(deleteCust(customers._id))
        })
        .catch((err)=>{
            alert(err)
        })
}}}

export const startEditCustomer = (custId,formData) =>{
        return(dispatch) => {
            axios.put(`/customers/${custId}`, formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const customers = response.data
            dispatch(editCust(customers._id,customers))
            alert('Updated Customer Successfully')
        })
        .catch((err)=>{
            alert(err)
        })
}}
