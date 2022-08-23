import JsonConfig from "./core/config/JsonConfig";
import Config from "./core/config/Config";

const config: Config = new JsonConfig('server.conf.json')

const port: number = config.GetValueOrDefault<number>('port', 8000)

console.log(port)