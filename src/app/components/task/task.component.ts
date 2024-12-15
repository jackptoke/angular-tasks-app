import { Component, inject, input, output } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  completedTaskId = output<string>();

  private tasksService = inject(TasksService);

  onClompletedClick() {
    this.completedTaskId.emit(this.task().id);
    var t = this.task()
    t.status = true;
    this.tasksService.updateTask(t);
  }
}
