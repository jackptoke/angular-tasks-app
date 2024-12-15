import { Component, computed, input, signal, Signal } from '@angular/core';
import { Task } from './task.model';
import { User } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) { }
  user = input.required<User|undefined>()
  showNewTaskForm = signal<boolean>(false);
  userTasks: Signal<Array<Task>> = computed(() => this.tasksService.getUserTasks(this.user()!.id))
  newTask: Task | undefined;

  onAddTaskClick() {
    this.showNewTaskForm.set(!this.showNewTaskForm());
  }

  onNewTaskFormClosed() {
    this.showNewTaskForm.set(false);
  }

  onTaskCompleted(taskId: string) {
    var task = this.tasksService.getTask(taskId);
    if(task != undefined){
      task.status = true;
      this.tasksService.updateTask(task);
    }
  }
}
