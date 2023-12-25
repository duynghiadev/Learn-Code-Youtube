const CustomerInfo = (props) => {
  return (
    <div>
      <h3>Customer Info</h3>
      <p>I am a child of Customer Two Component</p>
      <p>My name is: {props.name}.</p>
      <p>My email is: {props.email}.</p>
    </div>
  )
}

export default CustomerInfo
