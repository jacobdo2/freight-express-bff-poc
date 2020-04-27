import { Application } from "express";

import TasksController from "../controllers/tasks";

export class TasksRouter {
  constructor(app: Application) {
    const controller = new TasksController();
    app.get("/tasks", controller.tasks);
    app.get("/tasks/:id", controller.getTask);
    app.post("/tasks", controller.createTask);
    app.patch("/tasks/:id", controller.updateTask);
    app.delete("/tasks/:id", controller.deleteTask);
  }
}
