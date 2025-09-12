import { AxiosResponse } from 'axios'
import { ApiResult } from '../utils/commonTypes'

export default class BaseClient {
    protected baseUrl: string

    protected async handleRequest<T>(
        request: () => Promise<AxiosResponse<T>>,
    ): Promise<ApiResult<T>> {
        try {
            const response = await request()
            return {
                data: response.data,
                success: true,
            }
        } catch (error: any) {
            return {
                error: {
                    status: error.response?.status,
                    message: error.message,
                    response: error.response?.data,
                },
                success: false,
            }
        }
    }
}
