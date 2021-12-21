import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQ2NTcyNDUzZDhiYTBiZTlmMzhiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDEyNDc4MiwiZXhwIjoxNjQwMzgzOTgyfQ.0l29ZHs2f_s6ufP99WUcWBgKFry1k6Gvm3ONmUDg9kI'

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

