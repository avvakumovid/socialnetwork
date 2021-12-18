import axios from "axios";

class BaseAPI {
    static instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "902f3130-1dae-4590-801e-6de464903c83"
        }
    })

}

export class UsersAPI extends BaseAPI {

    static requestUser = async (currentPage, pageSize) => {
        let response = await this.instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data

    }
}

export class ProfileAPI extends BaseAPI {
    static getProfile = async (userId) => {
        let response = await this.instance.get(`/profile/${userId}`)
        return response.data;
    }
    static getStatus = async (userId) => {
        let response = await this.instance.get(`/profile/status/${userId}`)
        return response.data;
    }
    static updateStatus = async (status) => {
        let response = await this.instance.put(`/profile/status`, {status})
        return response.data;
    }
}

export class SubscribeAPI extends BaseAPI {
    static unfollow = async (id) => {
        let response = await this.instance.delete('follow/' + id)
        return response.data;
    }
    static follow = async (id) => {
        let response = await this.instance.post('follow/' + id)
        return response.data
    }
}

export class AuthAPI extends BaseAPI {
    static authMe = async () => {
        let response = await this.instance.get('auth/me')
        return response.data
    }
    static login = async (email, password, rememberMe = false) => {
        let response = await this.instance.post('auth/login', {email, password, rememberMe})
        return response.data
    }
    static logout = async () => {
        let response = await this.instance.delete('auth/login')
        return  response.data
    }
}

