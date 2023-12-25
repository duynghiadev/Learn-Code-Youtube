// ContactList.jsx
import React from 'react'

const ContactList = ({ contacts, onContactClick }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => onContactClick(contact)}>
            Person: {contact.name}, click to see detail ✌
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
