import UsersClient from '../client/users'
import { usersList } from '../data/enums/users'
import { User } from '../data/models/user'
import { ApiResult } from '../utils/commonTypes'

let usersClient: UsersClient
let response: ApiResult<any>

describe('GET user', () => {
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(() => {
        usersClient = new UsersClient()
    })
    afterEach(() => {})

    usersList.forEach((expectedUser) => {
        test(`with id ${expectedUser.id} successfully`, async () => {
            response = await usersClient.getUser(expectedUser.id)
            const actualUser: User = response.data!.data

            expect(actualUser.id).toBe(expectedUser.id)
            expect(actualUser.email).toBe(expectedUser.email)
            expect(actualUser.first_name).toBe(expectedUser.first_name)
            expect(actualUser.last_name).toBe(expectedUser.last_name)
            expect(actualUser.avatar).toBe(expectedUser.avatar)
        })
    })
})
