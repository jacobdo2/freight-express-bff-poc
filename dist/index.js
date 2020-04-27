"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = require("./routes/tasks");
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 8080; // default port to listen
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
// define a route handler for the default home page
const tasksRouter = new tasks_1.TasksRouter(app);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map