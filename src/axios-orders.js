import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-smoothie-order.firebaseio.com/'
})

export default instance;