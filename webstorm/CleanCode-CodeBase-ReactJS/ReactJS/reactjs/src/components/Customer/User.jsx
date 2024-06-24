const User = ({ id, name, email, handleDelete }) => {
  return (
    <div>
      <h3>
        {name} - {email}
        <button onClick={() => handleDelete(id)}>Delete</button>
      </h3>
    </div>
  )
}

export default User
