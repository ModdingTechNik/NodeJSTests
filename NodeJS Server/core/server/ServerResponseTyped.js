// noinspection JSUnusedGlobalSymbols

module.exports = function ServerResponseTyped(type, code, message) {
    this.type = type;
    this.code = code;
    this.message = message;
}