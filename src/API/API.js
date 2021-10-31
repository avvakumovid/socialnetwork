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

    static getUsers = (currentPage, pageSize) => {
        return this.instance.get(`users?page=${currentPage}&count=${pageSize}`).then(respone => respone.data)

    }
}

export class ProfileAPI extends BaseAPI {
    static getProfile = (userId) => {
        return this.instance.get(`/profile/${userId}`)
            .then(response => response.data)
    }
    static getStatus = (userId) => {
        return this.instance.get(`/status/${userId}`)
            .then(response => response.data)
    }
    static updateStatus = (userId) => {
        return this.instance.get(`/status/${userId}`)
            .then(response => response.data)
    }
}

export class SubscribeAPI extends BaseAPI {
    static unfollow = (id) => {
       return this.instance.delete('follow/' + id).then(response => response.data)
    }
    static follow = (id) => {
        return this.instance.post('follow/' + id).then(response => response.data)
    }
}

export class AuthAPI extends BaseAPI {
    static authMe = () => {
      return this.instance.get('auth/me').then(response => response.data)
    }
}