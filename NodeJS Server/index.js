const Server = require('./core/server/Server')
const Config = require('./core/config/JsonConfig')
const ActionsProvider = require('./core/actions/ActionsProvider')
const Action = require('./core/actions/Action')

const config = new Config('server.conf.json')
const actionsProvider = new ActionsProvider()
const server = new Server(config.getValueOrDefault('port', 8000))

actionsProvider.registerAll()
server.onStart = (server) => console.log(`Server start on port ${server.port}`)
server.onRequest = onRequest;

server.start();

function onRequest(session) {
    if (session.getMethod() === 'GET') {
        const query = session.getQuery();
        const action = new Action(query)
        const result = actionsProvider.execute(action)

        if (result !== null) {
            session.setSuccessResponse(result)
        }
        else if (action.isCorrect === false) {
            session.setErrorInvalidRequest()
        }
        else {
            session.setErrorNotFound()
        }
    }
    else {
        session.setErrorNotSupported();
    }
}