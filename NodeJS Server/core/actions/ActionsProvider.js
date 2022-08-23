const getTime = require('./handlers/getTimeHadle')

module.exports = class ActionsProvider {
    constructor() {
        this._actionsRepository = []
    }

    registerAll() {
        this.register('getTime', getTime)
    }

    register(name, handler) {
        this._actionsRepository.push({ endpoint : name, handler: handler })
    }

    execute(action) {
        if (action.isCorrect === false) return  null;

        const record = this._actionsRepository.find(value => {
            if (value.endpoint) {
                if (value.endpoint === action.name) {
                    return true;
                }
            }
        })

        if (record === undefined) return null;

        return record.handler(action)
    }
}