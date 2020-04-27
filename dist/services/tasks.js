"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("../models/task");
const v1_1 = __importDefault(require("uuid/v1"));
class TasksService {
    constructor() {
        this.tasks = [
            {
                id: "1",
                title: "hello",
                description: "abc",
                status: task_1.TaskStatus.OPEN,
            },
        ];
    }
    getTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }
    createTask(title, description) {
        const task = {
            id: v1_1.default(),
            title,
            description,
            status: task_1.TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
    updateTask(id, title, description, status) {
        const task = this.getTaskById(id);
        if (!task) {
            throw new Error("Task not found");
        }
        if (title) {
            task.title = title;
        }
        if (description) {
            task.description = description;
        }
        if (status) {
            task.status = status;
        }
        return task;
    }
    deleteTask(id) {
        const task = this.getTaskById(id);
        if (!task) {
            throw new Error("Task not found");
        }
        this.tasks.filter((t) => t.id !== id);
    }
}
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.js.map