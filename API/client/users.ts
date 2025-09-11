import axios, { AxiosResponse } from "axios"
import { User } from "../data/models/user"

export default class Users{
  
  async getUsers(): Promise<User[]> {
    let response: AxiosResponse<User[]>|undefined
    try {
      response = await axios.get('/api/users')
    } catch (error) {
      response = error.response
    }

    return response.data
  }

  async getUser(id: number): Promise<User> {
    let response: AxiosResponse<User> 
    try {
      response = await axios.get(`/api/users/${id}`)
    } catch (error) {
      response = error.response
  }
    return response.data
  }

  async createUser(user: User): Promise<User> {
    let response: AxiosResponse<User>
    try {
      response = await axios.post('/api/users', user)
    } catch (error) {
      response = error.response
    }

    return response.data
  }
}