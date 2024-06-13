const TabNavigation = (props) => {
  const { active, onHandleClickTab } = props

  const checkActiveTab = (idTab) => {
    let classTab = 'tab '

    if (idTab === active) {
      classTab += 'active'
    }
    return classTab
  }

  const handleClickActiveTab = (idTab) => {
    onHandleClickTab(idTab)
  }

  return (
    <div className='tabs'>
      <a onClick={() => handleClickActiveTab('react')} className={checkActiveTab('react')}>
        Reactjs
      </a>
      <a onClick={() => handleClickActiveTab('vue')} className={checkActiveTab('vue')}>
        Vuejs
      </a>
      <a onClick={() => handleClickActiveTab('angular')} className={checkActiveTab('angular')}>
        Angular
      </a>
      <a onClick={() => handleClickActiveTab('svelte')} className={checkActiveTab('svelte')}>
        Svelte
      </a>
    </div>
  )
}

export default TabNavigation
