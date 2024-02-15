import Axios from 'axios'

const axios = Axios.create({
    baseURL:'http://dct-tm.herokuapp.com/api'
})

export default axios