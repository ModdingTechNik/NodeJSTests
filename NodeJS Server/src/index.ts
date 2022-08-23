import JsonConfig from "./core/config/JsonConfig";
import HttpServer from "./core/server/HttpServer";
import HttpServerSession from "./core/server/HttpServerSession";

const config: JsonConfig = new JsonConfig('server.conf.json')

const port: number = config.GetValueOrDefault<number>('port', 8000)
const server: HttpServer = new HttpServer(port)

server.onStart = onStart
server.onRequest = onRequest

server.disableCorsPolicy()
server.start()

function onStart(server : HttpServer) : void {
    console.log(`Server start on port ${server.port}`)
}

function onRequest(session : HttpServerSession) : void {
    session.setErrorNotSupported()
}