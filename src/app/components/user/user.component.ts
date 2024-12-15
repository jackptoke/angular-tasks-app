import { Component, computed, Signal, signal, Input, input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Using Signal
  selectedUser = signal<User>(DUMMY_USERS[randomIndex]);
  imagePath: Signal<string> = computed(() => 'images/users/' + this.selectedUser().avatar );

  isSelected = input.required<boolean>();

  // Using Input
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  // returning the full image path by prefixing it with the base directory
  getImagePath() {
    return 'images/users/' + this.user.avatar;
  }

  // get imagePath() {
  //   return 'images/users/' + this.selectedUser().avatar;
  // }

  // first way to emit event from a signal

  //another way to emit event
    // Using signal as input
  siUser = input.required<User>()
  selectedUserId = output<string>();
  siImagePath = computed(() => {
    return 'images/users/' + this.siUser().avatar;
  })

  getImagePathFromSignalInput() {
    return 'images/users/' + this.siUser().avatar;
  }

  onClick() {
    // this.select.emit(this.siUser().id);
    this.selectedUserId.emit(this.siUser().id)
  }
}


