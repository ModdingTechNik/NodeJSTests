import url from "url";

export default class QueryParser {
    private readonly query: any

    public constructor(urlRequest: string | undefined) {
        if (urlRequest) {
            this.query = url.parse(urlRequest, true).query
        }
        else {
            this.query = { }
        }
    }

    public hasKey(key: string) : boolean {
        return !!this.query[key];
    }

    public getValue<T>(key: string) : T {
        return this.query[key] as T
    }
}