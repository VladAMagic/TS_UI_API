import axios from 'axios'

console.log(`============ testSetupFile Loaded ===========`)

jest.setTimeout(99999999)

jest.retryTimes(0, { logErrorsBeforeRetry: true })
axios.defaults.baseURL = global.baseUrl

beforeAll(async () => {
  //This can also be used to set the token, if authenticaion needed
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Accept'] = 'application/json'
        axios.defaults.headers.common['x-api-key'] = `reqres-free-v1`
})