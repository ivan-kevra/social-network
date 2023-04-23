import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '9a6c26a3-7c0a-407d-ba38-123ea04fe40d'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0`
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`, {}).then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`).then(response => response.data)
    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`/auth/me`).then(response => response.data)
    }
}







