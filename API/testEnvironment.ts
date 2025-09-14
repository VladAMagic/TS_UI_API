import NodeEnvironment from 'jest-environment-node'
import * as dotenv from 'dotenv'
import * as path from 'path'
// Environment-specific configurations
class CustomTestEnvironment extends NodeEnvironment {
    async setup() {
        await super.setup()
        dotenv.config({
            path: path.resolve(process.cwd(), '.env'),
        })
        this.global.baseUrl = process.env.API_BASE_URL
    }
}

export default CustomTestEnvironment
