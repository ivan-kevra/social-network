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
        console.warn('Obsolete method. Please use profile API object')
        return profileAPI.getProfile(userId)
    },
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`).then(res => res.data)
    },
    login(data: LoginParamsType) {
        return instance.post('/auth/login', data)
    },
    logout() {
        return instance.delete('/auth/login')
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status}).then(res => res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }

        })
    },
    saveProfile(profile: any) {
        return instance.put(`/profile`, profile).then(res => res.data)
    },
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`/security/get-captcha-url`)
    },
}


