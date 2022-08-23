const url = require('url')

module.exports = function parseQuery(requestUrl) {
    return url.parse(requestUrl, true).query;
}