import GetTimeAction from "../core/actions/GetTimeAction";
import QueryParser from "../core/utils/QueryParser";

const parser: QueryParser = new QueryParser("http://localhost:3580/?action=getTime")
const action: Date = new GetTimeAction().func(parser) as Date

test("getTimeActionTest", () => {
    expect(action).toBe(action)
})