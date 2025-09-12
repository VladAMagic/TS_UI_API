import axios from 'axios'
import { User, UsersResponse } from '../data/models/user'
import { ApiResult } from '../utils/commonTypes'
import BaseClient from './clientBase'

export default class UsersClient extends BaseClient {
    async getUsers(): Promise<ApiResult<UsersResponse>> {
        return this.handleRequest(() => axios.get('/api/users'))
    }

    async getUser(id: number): Promise<ApiResult<User>> {
        return this.handleRequest(() => axios.get(`/api/users/${id}`))
    }

    async createUser(user: User): Promise<ApiResult<User>> {
        return this.handleRequest(() => axios.post('/api/users', user))
    }
}
