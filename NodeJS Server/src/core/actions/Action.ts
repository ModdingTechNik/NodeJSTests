import QueryParser from "../utils/QueryParser";

export default abstract class Action {
    public abstract get name() : string
    public abstract func(query: QueryParser) : any
}