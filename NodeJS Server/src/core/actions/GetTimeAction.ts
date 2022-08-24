import QueryParser from "../utils/QueryParser";
import Action from "./Action";

export default class GetTimeAction extends Action {
    public get name(): string {
        return "getTime";
    }

    public func(query: QueryParser): any {
        return new Date();
    }
}