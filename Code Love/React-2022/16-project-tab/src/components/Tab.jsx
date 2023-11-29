import TabNavigation from './TabNavigation.jsx'
import TabContent from './TabContent.jsx'
import { useEffect, useState } from 'react'

let i = 0

const currentState = {
  current: ''
}

const Tab = () => {
  i++

  const [activeTab, setActiveTab] = useState('react')

  const handleClickActiveTab = (idTab) => {
    setActiveTab(idTab)
  }

  useEffect(() => {
    // Luôn luôn chạy khi click sang tab khác và lần đầu render
    console.group()
    console.log('state before change:', currentState.current)
    currentState.current = activeTab
    console.log('state after change:', currentState.current)
    console.groupEnd()

    console.log('-----------------------------------')
    console.log(`useEffect running version 00 ${i} is:`, activeTab)
  }, [activeTab])

  /**
   * - Nếu click vào Vue thì component sẽ render => 1 version render ở Vue và 1 version render ở React.
   * - activeTab hiện tại sẽ là activeTab('Vue') và activeTab trước đó sẽ là activeTab('React').
   * - Điều đó dẫn đến nó làm thay đổi cái dependency trong useEffect => dẫn đến hàm đó chạy lại => dẫn đến thay đổi state => state thay đổi thì component render lại.
   * - Ngoài cái việc render giao diện thì cái thằng useEffect cũng chạy lại.
   *
   * - Và cứ thế nếu ta thay đổi qua Angular thì version trước đó sẽ là Vue
   * - active hiện tại sẽ là activeTab('Angular') và activeTab trước đó sẽ là Vue
   * - Điều đó dẫn đến nó làm thay đổi cái dependency trong useEffect => dẫn đến hàm đó chạy lại => chạy lại thì nó thay đổi state => state thay đổi thì component re-render lại
   * - Ngoài cái việc render giao diện thì cái thằng useEffect cũng chạy lại
   */

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
