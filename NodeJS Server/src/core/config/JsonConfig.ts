import fs from 'fs'
import Config from "./Config";

export default class JsonConfig extends Config {
    protected load(path: string): any {
        try {
            const text: string = fs.readFileSync(path, 'utf-8');
            return JSON.parse(text);
        } catch (e) {
            return undefined;
        }
    }
}