import axios from "axios";

const storage = localStorage.getItem('app-state')
let token = ''
if (storage) {
    token = JSON.parse(storage).auth.token
}



// Instance
const instance = axios.create ({
    baseURL: 'http://localhost:3000/api/link',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
})

// API
export const linkApi = {
    generateLink(fromLink: string) {
        return instance.post('/generate', {from: fromLink})
    }
}