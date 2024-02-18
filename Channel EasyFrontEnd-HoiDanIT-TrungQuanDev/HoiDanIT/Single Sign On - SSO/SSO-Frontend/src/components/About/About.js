import { useEffect } from 'react'
import axios from '../../customize/axios'
import './About.scss'

const About = () => {
  useEffect(() => {
    axios.get('http://localhost:8081/health').then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <>
      <button className='btn btn-primary'>about me</button>
    </>
  )
}

export default About
