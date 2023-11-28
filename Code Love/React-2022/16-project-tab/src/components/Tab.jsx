import TabNavigation from './TabNavigation.jsx'
import TabContent from './TabContent.jsx'
import { useState } from 'react'

const Tab = () => {
  const [activeTab, setActiveTab] = useState('react')

  const handleClickActiveTab = (idTab) => {
    setActiveTab(idTab)
  }

  return (
    <div className='container'>
      <div id='tabs' className='tabs-container'>
        <TabNavigation active={activeTab} onHandleClickTab={handleClickActiveTab} />
        <TabContent active={activeTab} />
      </div>
    </div>
  )
}

export default Tab

/**
 * 1. Data thì truyền từ child lên parent (khi click vào thằng nào thì truyền data của thằng đó lên)
 *
 * 2. Thay đổi state ở trong tab cha theo giá trị con truyền lên khi click
 *  - Cách truyền data từ thằng con lên thằng cha là ta phải: truyền function từ thằng cha xuống, sau đấy từ thằng con chúng ta gọi lên thằng cha.
 *
 *  - Nhớ là khi chúng ta truyền data từ thằng con lên thằng cha, mà muốn thay đổi state của thằng cha thì chúng ta phải xác định là data đã chạy ở thằng con chưa
 */
