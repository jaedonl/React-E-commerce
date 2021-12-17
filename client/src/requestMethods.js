import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWM5MzNkOTAxMmI4NjlhMmFkOTI0OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzk2MDI3NjksImV4cCI6MTYzOTg2MTk2OX0.v13BKKAnGdyZ1VjhwHFcdyBCtfit764QOhM9JLsjJ2s'

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})

