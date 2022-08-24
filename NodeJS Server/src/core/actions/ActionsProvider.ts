import QueryParser from "../utils/QueryParser";
import Action from "./Action";
import GetTimeAction from "./GetTimeAction";

export default class ActionsProvider {
    private readonly actions: Action[]

    public constructor() {
        this.actions = []
    }

    public registerAll() : void {
        this.register(new GetTimeAction())
    }

    public tryRun(name: string, query: QueryParser) : any | null {
        const action = this.actions.find(value => value.name === name)
        if (action) {
            return action.func(query)
        }
        return null
    }


    private register(action : Action) {
        this.actions.push(action)
    }
}