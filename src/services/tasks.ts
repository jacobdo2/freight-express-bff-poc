import { Task, TaskStatus } from "../models/task";
import uuid from "uuid/v1";

export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "hello",
      description: "abc",
      status: TaskStatus.OPEN,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(
    id: string,
    title: string | undefined,
    description: string | undefined,
    status: TaskStatus | undefined
  ) {
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

  deleteTask(id: string): void {
    const task = this.getTaskById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    this.tasks.filter((t) => t.id !== id);
  }
}
