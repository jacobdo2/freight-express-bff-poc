"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("../services/tasks");
class TasksController {
    constructor() {
        this.service = new tasks_1.TasksService();
        this.tasks = this.tasks.bind(this);
        this.getTask = this.getTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    tasks(_req, res) {
        res.send(this.service.getTasks());
    }
    getTask(req, res) {
        const { id } = req.params;
        res.send(this.service.getTaskById(id));
    }
    createTask(req, res) {
        const { title, description } = req.body;
        res.send(this.service.createTask(title, description));
    }
    updateTask(req, res) {
        const { title, description, status } = req.body;
        try {
            res.send(this.service.updateTask(req.params.id, title, description, status));
        }
        catch (error) {
            res.sendStatus(400);
        }
    }
    deleteTask(req, res) {
        try {
            this.service.deleteTask(req.params.id);
        }
        catch (error) {
            res.sendStatus(400);
        }
        res.sendStatus(200);
    }
}
exports.default = TasksController;
//# sourceMappingURL=tasks.js.map