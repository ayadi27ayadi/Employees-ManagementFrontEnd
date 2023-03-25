import axios from "axios"


export const axiosInstance = axios.create(
    {
        baseURL:'http://localhost:8000',
        //timeout: 10000
    }
);
// INTERCEPTORS
// const token = localStorage.getItem('token')
// axios.interceptors.request.use(config =>  {
//     // Do something before request is sent
//     if(token) config.headers.Authorization = token
//     return config;
//   },  (error) => {
//     // Do something with request error
//     return Promise.reject(error);
//   });