const http = require("http")

const port = 3580 // TODO: export port to config.

http.createServer(onRequest).listen(port, onStart)

function FormatAnswer(msg, code) {
    this.Message = msg;
    this.Code = code;
}

function onRequest(req, res) {
    if (req.method === 'GET') {
        setJsonAnswer(res, 200, 'OK GET')
    }
    else {
        setJsonAnswer(res, 404, `ERROR ${req.method}`)
    }
}

function onStart() {
    console.log(`Server start on port ${port}`)
}

function setJsonAnswer(res, code, answer) {
    res.writeHead(code, { 'context-type': 'text/json' })
    res.end(JSON.stringify(new FormatAnswer(answer, code)))
}