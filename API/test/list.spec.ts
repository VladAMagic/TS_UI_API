import UsersClient from '../client/users'
import { usersList } from '../data/enums/users'
import { User } from '../data/models/user'
import { ApiResult } from '../utils/commonTypes'

let usersClient: UsersClient
let response: ApiResult<any>

describe('GET users', () => {
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(() => {
        usersClient = new UsersClient()
    })
    afterEach(() => {})

    test('returns list successfully', async () => {
        response = await usersClient.getUsers()
        expect(response.data?.data).toHaveLength(6)

        const users: User[] = response.data!.data

        expect(users[0]).toHaveProperty('id')
        expect(users[0]).toHaveProperty('email')
        expect(users[0]).toHaveProperty('first_name')
        expect(users[0]).toHaveProperty('last_name')
        expect(users[0]).toHaveProperty('avatar')
    })
})
