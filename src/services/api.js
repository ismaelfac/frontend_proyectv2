import axios from 'axios';

const requestHelper = axios.create({
    baseURL:'http://localhost:8000/api',

});

export default {
    countries: {
        get: () => requestHelper({
            url: 'countries',
            method: 'get'
        }),
        create: data => requestHelper({
            url: 'countries',
            method: 'post',
            data
        }),
    }
}