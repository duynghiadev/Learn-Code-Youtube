import { useContext } from 'react'
import { RouterContext } from './Routes'

const Route = (props) => {
  const RouterContextStore = useContext(RouterContext)
  console.log('RouterContextStore:', RouterContextStore)

  const pathName = RouterContextStore.location.pathname

  if (pathName === props.path) {
    return props.element
  } else {
    return null
  }
}

export default Route
