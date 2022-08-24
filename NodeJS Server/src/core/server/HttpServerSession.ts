import {IncomingMessage, OutgoingHttpHeader, ServerResponse} from "http";

export default class HttpServerSession {
    private readonly request: IncomingMessage;
    private readonly response: ServerResponse;
    private readonly globalHeader: OutgoingHttpHeader[];

    public constructor(request: IncomingMessage, response: ServerResponse, globalHeaders : OutgoingHttpHeader[]) {
        this.request = request;
        this.response = response;
        this.globalHeader = globalHeaders;
    }

    public setErrorNotSupported() : void {
        this.response.writeHead(405, this.globalHeader)
        this.response.end()
    }
}