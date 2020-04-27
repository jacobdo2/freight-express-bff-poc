import { Request, Response } from "express";
import { TasksService } from "../services/tasks";

export default class TasksController {
  private service: TasksService;
  constructor() {
    this.service = new TasksService();
    this.tasks = this.tasks.bind(this);
    this.getTask = this.getTask.bind(this);
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  tasks(_req: Request, res: Response) {
    res.send(this.service.getTasks());
  }

  getTask(req: Request, res: Response) {
    const { id } = req.params;
    res.send(this.service.getTaskById(id));
  }

  createTask(req: Request, res: Response) {
    const { title, description } = req.body;

    res.send(this.service.createTask(title, description));
  }

  updateTask(req: Request, res: Response) {
    const { title, description, status } = req.body;

    try {
      res.send(
        this.service.updateTask(req.params.id, title, description, status)
      );
    } catch (error) {
      res.sendStatus(400);
    }
  }

  deleteTask(req: Request, res: Response) {
    try {
      this.service.deleteTask(req.params.id);
    } catch (error) {
      res.sendStatus(400);
    }
    res.sendStatus(200);
  }
}
