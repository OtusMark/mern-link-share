import axios from "axios";

// Instance
const instance = axios.create ({
    baseURL: 'http://localhost:3000/api/auth',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// API
export const authAPI = {
    register(formData: LoginRegisterDataT) {
        return instance.post('/register', formData)
    },
    login(formData: LoginRegisterDataT) {
        return instance.post('/login', formData)
    }
}

// Types
export type LoginRegisterDataT = {
    email: string
    password: string
}