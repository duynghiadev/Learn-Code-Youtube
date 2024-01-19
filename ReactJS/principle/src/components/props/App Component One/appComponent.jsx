/**
 * Dưới đây là một ví dụ khó hơn về cách sử dụng props trong React. Trong ví dụ này, chúng ta sẽ tạo một ứng dụng danh bạ có khả năng hiển thị danh sách các người liên lạc và chi tiết về từng người liên lạc.
 */

/**
 * Trong ví dụ này:
 *
 * - App component quản lý danh sách liên lạc và hiển thị chi tiết khi một liên lạc được chọn.
 * - ContactList component nhận danh sách liên lạc thông qua props và hiển thị chúng dưới dạng danh sách. Khi một liên lạc được nhấp vào, nó thông báo lại cho App thông qua một hàm callback (onContactClick).
 *
 * - Cả hai component đều sử dụng props để tương tác với dữ liệu và sự kiện từ component cha. Việc này thể hiện cách props có thể được sử dụng để chia nhỏ ứng dụng thành các thành phần nhỏ hơn và làm cho mã nguồn dễ quản lý hơn.
 */

/**
 * - useState được sử dụng để quản lý trạng thái trong function component thay vì this.state và this.setState trong class component.
 * - Cả hai component đều là function component thay vì class component. Dữ liệu và hàm callback được truyền vào component thông qua tham số (props).
 * - Sử dụng destructuring để trực tiếp trích xuất giá trị từ props trong ContactList.
 */
// App.jsx
import React, { useState } from 'react'
import ContactList from './contactListComponent'

const AppComponent = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe 😆', phone: '555-1234' },
    { id: 2, name: 'Jane Doe 🤣', phone: '555-5678' }
    // Add more contacts as needed
  ])

  const [selectedContact, setSelectedContact] = useState(null)

  console.log('selectedContact:', selectedContact)

  const handleContactClick = (contact) => {
    console.log('contact parent:', contact)
    setSelectedContact(contact)
  }

  return (
    <div>
      <h1>Contact AppComponent</h1>
      <ContactList contacts={contacts} onContactClick={handleContactClick} />
      {selectedContact && (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Phone: {selectedContact.phone}</p>
        </div>
      )}
    </div>
  )
}

export default AppComponent
