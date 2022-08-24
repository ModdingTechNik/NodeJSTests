export interface ServerJsonResponse {
    isCorrect: boolean
    type : ServerRestResponseType
    code: number
    message: string
    result: any
}

export enum ServerRestResponseType {
    SUCCESS = 'success',
    ERROR = 'error',
}