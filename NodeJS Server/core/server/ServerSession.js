const ServerResponseTyped = require('./ServerResponseTyped')

module.exports = class ServerSession {
    constructor(request, response) {
        this._request = request;
        this._response = response;
    }

    getMethod() {
        return this._request.method;
    }

    setErrorNotSupported() {
        this._response.writeHead(405, this.headers())
        this._response.end(JSON.stringify(new ServerResponseTyped('ERROR', 405, 'OperationNotSupportedError')))
    }

    headers() {
        return {
            'context-type': 'text/json'
        };
    }
}