import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  )
}

export default Navigation
