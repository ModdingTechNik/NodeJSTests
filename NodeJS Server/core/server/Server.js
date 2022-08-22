const http = require("http")
const ServerSession = require("./ServerSession")

module.exports = class Server {
    constructor(port) {
        this._port = port;

        this.onStart = (server) => {};
        this.onRequest = (session) => {};
    }

    start() {
        http.createServer((request, response) => this.onRequest(new ServerSession(request, response)))
            .listen(this._port, () => this.onStart(this))
    }

    getPort() {
        return this._port;
    }
}