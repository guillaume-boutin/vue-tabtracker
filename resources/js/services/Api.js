import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://tabtracker.local/api'
    });
}