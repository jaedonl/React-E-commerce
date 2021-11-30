import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWM5MzNkOTAxMmI4NjlhMmFkOTI0OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzgyNTAzNTcsImV4cCI6MTYzODUwOTU1N30.OPGQBD9bWilcum74xTzxIiwYEPMa0uxjb6tzb2Gy1es"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})

