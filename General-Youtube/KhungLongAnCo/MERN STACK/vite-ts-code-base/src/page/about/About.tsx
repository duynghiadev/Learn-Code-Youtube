import { MENU } from 'defines'
import { Link } from 'react-router-dom'

export const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <Link to={MENU.HOME}>Home</Link>
    </div>
  )
}
