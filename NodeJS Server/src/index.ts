import JsonConfig from "./core/config/JsonConfig";
import HttpServer from "./core/server/HttpServer";
import HttpServerSession from "./core/server/HttpServerSession";
import QueryParser from "./core/utils/QueryParser";

const config: JsonConfig = new JsonConfig('server.conf.json')

const port: number = config.GetValueOrDefault<number>('port', 8000)
const server: HttpServer = new HttpServer(port)

server.onStart = onStart
server.onRequest = onRequest

server.setupPolicy()
server.start()

function onStart(server : HttpServer) : void {
    console.log(`Server start on port ${server.port}`)
}

function onRequest(session : HttpServerSession) : void {
    if (session.method === 'GET') {
        const parser: QueryParser = new QueryParser(session.url)

        if (parser.hasKey('action')) {
            const actionName: string = parser.getValue('action')
            session.endSuccess(actionName);
        }
        else {
            session.endErrorInvalidRequest()
        }
    }
    else {
        session.endErrorNotSupported()
    }
}