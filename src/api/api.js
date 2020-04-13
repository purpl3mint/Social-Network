import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "efb63229-5620-41d2-8970-2d7a87f850e9"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    //    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  }
}
