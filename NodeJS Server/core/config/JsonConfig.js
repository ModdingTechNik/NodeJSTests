const fs = require('fs')

module.exports = class JsonConfig {
    constructor(path) {
        try {
            let json = fs.readFileSync(path, 'utf-8');
            this._Config = JSON.parse(json)
        } catch (e) {
            this._Config = undefined;
        }
    }

    getValueOrDefault(name, defaultValue) {
        if (this._Config) {
            if (this._Config[name]) {
                return this._Config[name];
            }
        }
        return defaultValue;
    }
}