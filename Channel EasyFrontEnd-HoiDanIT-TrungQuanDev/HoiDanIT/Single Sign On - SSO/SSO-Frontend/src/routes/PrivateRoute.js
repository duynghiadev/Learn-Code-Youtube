import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
  const user = useSelector((state) => state.account.userInfo)

  useEffect(() => {
    if (user && !user.access_token) {
      window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_CURRENT_PROJECT_URL}`
    }
  }, [])

  if (user && user.access_token) {
    return <>{props.children}</>
  }

  return <></>
}

export default PrivateRoute
