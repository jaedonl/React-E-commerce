import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWM5MzNkOTAxMmI4NjlhMmFkOTI0OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzg0ODYyNjUsImV4cCI6MTYzODc0NTQ2NX0.vO5i-NO063BbgimAcp_xAhmdNfaFr2Moc3QnNX7S80w"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})

