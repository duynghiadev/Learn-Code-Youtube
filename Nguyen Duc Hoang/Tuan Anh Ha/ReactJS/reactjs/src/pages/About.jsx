import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate = useNavigate()

  const handleGoProducts = () => {
    console.log('redirecting products...')
    navigate('/products')
  }

  const handleGoUsers = () => {
    console.log('redirecting users...')
    navigate('/users')
  }

  return (
    <div>
      <h3>About</h3>
      <p>This is page About</p>
      <button onClick={handleGoProducts}>Go to Products</button>
      <button onClick={handleGoUsers}>Go to Users</button>
    </div>
  )
}

export default About
