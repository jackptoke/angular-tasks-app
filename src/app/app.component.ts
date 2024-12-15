import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './components/user/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'eden-school-app';
  users = DUMMY_USERS;
  user: User | undefined;
  selectedUserId = "";

  onUserSelected(id: string) {
    this.selectedUserId = id;
    this.user = this.getSelectedUser();
  }

  getSelectedUser() {
    return this.users.find((u) => u.id == this.selectedUserId);
  }
}
