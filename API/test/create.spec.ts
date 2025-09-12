import UsersClient from '../client/users'
import { usersList } from '../data/enums/users'
import { UserFactory } from '../data/factories/user'
import { User } from '../data/models/user'
import { ApiResult } from '../utils/commonTypes'

let usersClient: UsersClient
let response: ApiResult<any>

describe('CREATE user', () => {
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(() => {
        usersClient = new UsersClient()
    })
    afterEach(() => {})

    test(`is successfull`, async () => {
        const user: User = UserFactory.default()

        response = await usersClient.createUser(user)
        const actualUser: User = response.data
        console.log(actualUser)
        expect(actualUser.id).toBe(user.id)
        expect(actualUser.email).toBe(user.email)
        expect(actualUser.first_name).toBe(user.first_name)
        expect(actualUser.last_name).toBe(user.last_name)
        expect(actualUser.avatar).toBe(user.avatar)
    })
})
