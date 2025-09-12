export interface ApiResult<T> {
    data?: T
    error?: {
        status?: number
        message: string
        response?: any
    }
    success: boolean
}
