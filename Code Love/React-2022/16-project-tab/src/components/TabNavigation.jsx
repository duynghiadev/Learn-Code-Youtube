const TabNavigation = (props) => {
  const { active } = props

  const checkActiveTab = (idTab) => {
    let classTab = 'tab '

    if (idTab === active) {
      classTab += 'active'
    }
    return classTab
  }

  return (
    <div className='tabs'>
      <a className={checkActiveTab('react')}>Reactjs</a>
      <a className={checkActiveTab('vue')}>Vuejs</a>
      <a className={checkActiveTab('angular')}>Angular</a>
      <a className={checkActiveTab('svelte')}>Svelte</a>
    </div>
  )
}

export default TabNavigation
