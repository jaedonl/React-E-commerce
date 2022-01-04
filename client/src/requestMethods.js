import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQ2NTcyNDUzZDhiYTBiZTlmMzhiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTMyOTI0NCwiZXhwIjoxNjQxNTg4NDQ0fQ.SLS-SHjzYl4PyJAik3_Hx7g53jTDC0O8wjqLrJoxjEw'

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

