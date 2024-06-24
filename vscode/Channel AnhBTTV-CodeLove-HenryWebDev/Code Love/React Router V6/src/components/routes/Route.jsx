const Route = (props) => {
  const pathName = window.location.pathname

  if (pathName === props.path) {
    return props.element
  } else {
    return null
  }
}

export default Route
