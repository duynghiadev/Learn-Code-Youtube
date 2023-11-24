function Child(props) {
  const { parentToChild, name } = props
  console.log('parentToChild:', parentToChild)
  console.log('name:', name)

  return <div>Child</div>
}

export default Child
