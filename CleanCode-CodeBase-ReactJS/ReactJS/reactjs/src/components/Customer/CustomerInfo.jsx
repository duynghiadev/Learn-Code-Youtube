const CustomerInfo = (props) => {
  const { info } = props // Destructuring

  return (
    <div>
      <h3>Customer Info</h3>
      <p>I am a child of Customer Two Component</p>
      <p>My name is: {info.name}.</p>
      <p>My email is: {info.email}.</p>
      <p>I live in: {info.location}.</p>
      <p>I work for: {info.company}.</p>
    </div>
  )
}

export default CustomerInfo
