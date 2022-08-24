import http from "http";
import HttpServerSession from "./HttpServerSession";

export default class HttpServer {
    private readonly globalHeaders: string[]
    public readonly port: number
    public onStart: (server : HttpServer) => void
    public onRequest: (session: HttpServerSession) => void

    public constructor(port: number) {
        this.globalHeaders = []
        this.port = port;
        this.onStart = () => { }
        this.onRequest = () => { }
    }

    public start() : void {
        http.createServer((req, res) => {
            this.onRequest(new HttpServerSession(req, res, this.globalHeaders))
        }).listen(this.port, () => this.onStart(this))
    }

    public addHeader(key: string, header: string) : void {
        this.globalHeaders.push(key);
        this.globalHeaders.push(header);
    }

    public setupPolicy() : void {
        this.addHeader('Access-Control-Allow-Origin', '*')
        this.addHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
        this.addHeader('Content-type', 'text/json')
    }
}