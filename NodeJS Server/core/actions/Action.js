 module.exports = class Action {
    constructor(query) {
        this._isCorrect = query.action !== undefined
        this._query = query;
    }

    get name() {
        return this._query.action;
    }

     // noinspection JSUnusedGlobalSymbols
     get query() {
         return this._query;
     }
     get isCorrect() {
         return this._isCorrect;
     }
 }