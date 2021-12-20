import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQ2NTcyNDUzZDhiYTBiZTlmMzhiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTc3MTM0NiwiZXhwIjoxNjQwMDMwNTQ2fQ.5D1clVPXjf97ctViNlBS8SDJAo2-tkCx7Kl_Srh8h2k'


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});