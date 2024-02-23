import axios from '../config/axios'

export const setTicket =(tick) => {
    return {type: 'SET_TICKET',payload :tick}
}

export const deleteTicket=(id) => {
    return {type: 'DELETE_TICKET', payload:id}
}

export const editTicket=(id,tick) => {
    return {type: 'EDIT_TICKET', payload:id,payload1:tick}
}

export const startAddTickets =(formData)=>{
    return(dispatch) => {
        axios.post('/tickets',formData,
                    {headers:{
                    'x-auth':localStorage.getItem('authToken')
                    }})
            .then((response) => {
                console.log('response.data',response.data)
                if (response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('Added Ticket Successfully')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export const startGetTickets =() =>{
    return(dispatch) => {
        axios.get('/tickets', {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const tickets = response.data
            dispatch(setTicket(tickets))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startDeleteTickets = (ticketId) =>{
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return(dispatch) => {
            axios.delete(`/customers/${ticketId}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const tickets = response.data
            dispatch(deleteTicket(tickets._id))
        })
        .catch((err)=>{
            alert(err)
        })
}}}

export const startEditTickets = (ticketId,formData) =>{
        return(dispatch) => {
            axios.put(`/tickets/${ticketId}`, formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const tickets = response.data
            dispatch(editTicket(tickets._id,tickets))
            alert('Updated Ticket Successfully')
        })
        .catch((err)=>{
            alert(err)
        })
}}

