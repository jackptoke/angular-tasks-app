import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      date: '2025-12-31',
      status: false,
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      date: '2024-05-31',
      status: false,
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      date: '2024-06-15',
      status: false
    },
  ];

  constructor() {
    const localTasks = localStorage.getItem("tasks");
    if(localTasks) {
      this.tasks = JSON.parse(localTasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => !task.status && task.userId === userId);
  }

  getTask(taskId: string) {
    return this.tasks.find((task) => task.id === taskId);
  }

  addTask(newTask: Task) {
    this.tasks.unshift(newTask);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  updateTask(task: Task) {
    this.removeTask(task.id);
    this.addTask(task);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
