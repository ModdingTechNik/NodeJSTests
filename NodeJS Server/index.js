const Server = require('./core/server/Server')

const server = new Server(3580) // TODO: export port to config.

server.onStart = (server) => console.log(`Server start on port ${server.getPort()}`)

server.onRequest = onRequest;

server.start();

function onRequest(session) {
    if (session.getMethod() === 'GET') {
        // TODO: command processing.
        session.setErrorNotSupported();
    }
    else {
        session.setErrorNotSupported();
    }
}