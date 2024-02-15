import Axios from "axios"

export default Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})