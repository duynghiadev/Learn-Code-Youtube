import { useContext } from 'react'
import { ThemeContext } from './UseContextCopy'

const Paragraph = () => {
  const theme = useContext(ThemeContext)
  console.log(`theme: ${theme}`)

  return (
    <div className={theme}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptatem incidunt deleniti
      ullam fuga quasi voluptates autem cum suscipit, quo quaerat excepturi quam fugiat, error
      repellendus unde veritatis voluptas nisi?
    </div>
  )
}

export default Paragraph
