const Link = (props) => {
  const { to, children } = props

  const handleClickChangePath = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', to)
  }

  return (
    <a href={to} onClick={handleClickChangePath}>
      {children}
    </a>
  )
}

export default Link
