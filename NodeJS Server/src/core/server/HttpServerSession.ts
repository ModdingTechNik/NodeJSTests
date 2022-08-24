import {IncomingMessage, OutgoingHttpHeader, ServerResponse} from "http";
import {ServerJsonResponse, ServerRestResponseType} from "../api/ServerRestResponse";

export default class HttpServerSession {
    private readonly request: IncomingMessage;
    private readonly response: ServerResponse;
    private readonly globalHeader: OutgoingHttpHeader[];

    public constructor(request: IncomingMessage, response: ServerResponse, globalHeaders : OutgoingHttpHeader[]) {
        this.request = request;
        this.response = response;
        this.globalHeader = globalHeaders;
    }

    public get method() : string | undefined {
        return this.request.method;
    }

    public endErrorNotSupported() : void {
        this.endJson({
                code: 405, isCorrect: false,
                type: ServerRestResponseType.ERROR,
                message: 'NotSupported', result: { } })
    }

    public endSuccess(result: any) : void {
        this.endJson({
            code: 202, isCorrect: true,
            type: ServerRestResponseType.SUCCESS,
            message: 'Success', result: result })
    }

    private endJson(objectToJson: ServerJsonResponse) : void {
        this.response.writeHead(objectToJson.code, this.globalHeader)
        this.response.end(JSON.stringify(objectToJson))
    }
}