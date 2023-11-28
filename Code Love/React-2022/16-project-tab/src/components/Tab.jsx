import TabNavigation from './TabNavigation.jsx'
import TabContent from './TabContent.jsx'
import { useState } from 'react'

const Tab = () => {
  const [activeTab, setActiveTab] = useState('react')

  return (
    <div className='container'>
      <div id='tabs' className='tabs-container'>
        <TabNavigation active={activeTab} />
        <TabContent active={activeTab} />
      </div>
    </div>
  )
}

export default Tab
