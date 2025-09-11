import NodeEnvironment from 'jest-environment-node'
// Environment-specific configurations
class CustomTestEnvironment extends NodeEnvironment {
    async setup() {
        await super.setup()
        this.global.baseUrl = 'https://reqres.in'
    }
}

export default CustomTestEnvironment