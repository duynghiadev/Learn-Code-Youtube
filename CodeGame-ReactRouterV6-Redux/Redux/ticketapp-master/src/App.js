import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { startUserLogout } from './actions/userAction'
import Customer from './components/customer/Customer'
import CustShow from './components/customer/CustShow'
import Departments from './components/department/Departments'
import DeptShow from './components/department/DeptShow'
import Employees from './components/employees/Employees'
import EmpShow from './components/employees/EmpShow'
import Tickets from './components/tickets/Tickets'
import TicketShow from './components/tickets/TicketShow'


function App(props){
    const handleLogout = () =>{
        props.dispatch(startUserLogout())
    }
    return (
        <BrowserRouter>
            <div>
                <h1>Ticket Master</h1>
                <Link to="/" className="button">Home</Link>
                {
                    Object.keys(props.user).length !==0 ?(
                        <div>
                            <Link to= "/account" className="button">Account</Link>
                            <Link to= "#" onClick={handleLogout} className="button">Logout</Link>
                            <Link to ="/customer/customers" className="button">Customers</Link>
                            <Link to ="/department/departments" className="button">Departments</Link>
                            <Link to ="/employees/employees" className="button">Employees</Link>
                            <Link to ="/tickets/tickets" className="button" >Tickets</Link>

                        </div>
                    ) : (
                        <div>
                            <Link to= "/users/register" className="button">Register</Link>
                            <Link to= "/users/Login" className="button">Login</Link>
                        </div>
                    )
                }
                <Switch>
                    <Route path= "/" component={Home} exact = {true}></Route>
                    <Route path= "/users/register" component = {Register}></Route>
                    <Route path= "/users/login" component = {Login}></Route>
                    <Route path= "/customer/customers" component = {Customer}></Route>
                    <Route path="/customer/custshow" component = {CustShow}></Route>
                    <Route path="/department/departments" component = {Departments}></Route>
                    <Route path="/department/deptshow" component = {DeptShow}></Route>
                    <Route path="/employees/employees" component = {Employees}></Route>
                    <Route path="/employees/empshow" component = {EmpShow}></Route>
                    <Route path="/tickets/tickets" component = {Tickets}></Route>
                    <Route path="/tickets/ticketshow" component = {TicketShow}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(App)