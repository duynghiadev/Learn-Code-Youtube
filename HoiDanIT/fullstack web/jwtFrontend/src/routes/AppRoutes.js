import { Switch, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Users from '../components/ManageUsers/Users'
import PrivateRoutes from './PrivateRoutes'
import Role from '../components/Role/Role'

const AppRoutes = (props) => {
  /**
   * ['users/show', 'users/update']
   */

  const Project = () => {
    return <>Project</>
  }

  return (
    <>
      <Switch>
        <PrivateRoutes path='/users' component={Users} />
        <PrivateRoutes path='/projects' component={Project} />
        <PrivateRoutes path='/roles' component={Role} />
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/' exact>
          Home
        </Route>
        <Route path='*'>404 Not Fount</Route>
      </Switch>
    </>
  )
}

export default AppRoutes
