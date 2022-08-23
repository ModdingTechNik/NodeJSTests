const Server = require('./core/server/Server')
const Config = require('./core/config/JsonConfig')

const config = new Config('server.conf.json')
const server = new Server(config.getValueOrDefault('port', 8000))

server.onStart = (server) => console.log(`Server start on port ${server.getPort()}`)
server.onRequest = onRequest;

server.start();

function onRequest(session) {
    if (session.getMethod() === 'GET') {
        const query = session.getQuery();
        session.setSuccessResponse(query)
    }
    else {
        session.setErrorNotSupported();
    }
}