import { Component, inject, input, output } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  closeNewTask = output<void>();
  // newTask = output<Task>();

  private tasksService = inject(TasksService);

  taskTitle: string = "";
  taskSummary: string = "";
  taskDate: string = "";


  onCanceled() {
    this.closeNewTask.emit();
  }

  onCreate() {
    this.tasksService.addTask({
      id: "t" + Math.floor(Math.random()*10000000),
      userId: this.userId(),
      title: this.taskTitle,
      date: this.taskDate,
      summary: this.taskSummary,
      status: false
    });
    this.closeNewTask.emit();
  }
}
