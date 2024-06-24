const Link = (props) => {
  const { to, children, onHandleChangePath } = props

  const handleClickChangePath = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', to)

    // execute function parent define from parent
    onHandleChangePath()
  }

  return (
    <a href={to} onClick={handleClickChangePath}>
      {children}
    </a>
  )
}

export default Link
