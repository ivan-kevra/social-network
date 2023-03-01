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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}).then(response => response.data)
    }
}

export const headerAPI = {
    getAuth() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => response.data)
    }
}







