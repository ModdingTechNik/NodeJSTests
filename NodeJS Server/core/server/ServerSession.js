const ServerResponseTyped = require('./ServerResponseTyped')
const parseQuery = require('../utils/parseQuery')

module.exports = class ServerSession {
    constructor(request, response) {
        this._request = request;
        this._response = response;
    }

    getMethod() {
        return this._request.method;
    }

    getQuery() {
        return parseQuery(this._request.url)
    }

    setErrorNotSupported() {
        this._response.writeHead(405, this.headers())
        this._response.end(JSON.stringify(new ServerResponseTyped('ERROR', 405, 'OperationNotSupportedError')))
    }

    setSuccessResponse(obj) {
        this._response.writeHead(202, this.headers())
        this._response.end(JSON.stringify(new ServerResponseTyped('SUCCESS', 202, JSON.stringify(obj))))
    }

    headers() {
        return {
            'context-type': 'text/json'
        };
    }
}