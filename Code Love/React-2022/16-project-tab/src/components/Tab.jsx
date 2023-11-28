import TabNavigation from './TabNavigation.jsx'
import TabContent from './TabContent.jsx'

const Tab = () => {
  return (
    <div className='container'>
      <div id='tabs' className='tabs-container'>
        <TabNavigation />
        <TabContent />
      </div>
    </div>
  )
}

export default Tab
