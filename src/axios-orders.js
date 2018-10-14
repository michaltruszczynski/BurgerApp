import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-eb511.firebaseio.com/'
});

export default instance;