
import axios from 'axios';
import store from '../modules/login/store'

export default function setup() {
    axios.interceptors.request.use(function(config) {
        const token = store.login.token;
        console.log('to chamando')
        console.log(token)
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}