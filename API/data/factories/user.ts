import { faker } from '@faker-js/faker'
import { User } from '../models/user'

class UserFactory {
    private static defaultUser(): User {
        return {
            email:
                faker.string.alphanumeric(5) +
                faker.internet.email({
                    allowSpecialCharacters: false,
                }),
            first_name: faker.person.fullName(),
            last_name: faker.person.fullName(),
            avatar: faker.image.avatar(),
            id: faker.number.int(),
        }
    }

    static default(overwrites: Partial<User> = {}): User {
        return {
            ...UserFactory.defaultUser(),
            ...overwrites,
        }
    }

    static defaultList(numberOfUsers: number): User[] {
        let listOfUsers: User[] = []
        for (let tranCount = 0; tranCount < numberOfUsers; tranCount++) {
            listOfUsers.push(UserFactory.default())
        }
        return listOfUsers
    }
}

export { UserFactory }
