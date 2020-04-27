"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = __importDefault(require("../controllers/tasks"));
class TasksRouter {
    constructor(app) {
        const controller = new tasks_1.default();
        app.get("/tasks", controller.tasks);
        app.get("/tasks/:id", controller.getTask);
        app.post("/tasks", controller.createTask);
        app.patch("/tasks/:id", controller.updateTask);
        app.delete("/tasks/:id", controller.deleteTask);
    }
}
exports.TasksRouter = TasksRouter;
//# sourceMappingURL=tasks.js.map