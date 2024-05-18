import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'eco3d.token': token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}