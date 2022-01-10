import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQ2NTcyNDUzZDhiYTBiZTlmMzhiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTg0MTMzOSwiZXhwIjoxNjQyMTAwNTM5fQ.o5gFrZa4Nk9DrcNngU1B33dOOJxuIvQLBuVyGkfhSkg'

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

