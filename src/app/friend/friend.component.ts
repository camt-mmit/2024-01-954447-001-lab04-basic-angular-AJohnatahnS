import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-friend',
  imports: [],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendComponent {
  friends = [
    {
      firstName: 'Adam',
      lastName: 'Tomson',
      nickName: 'Adam',
      githubLinks: ['Lab02', 'Lab03', 'Lab04'],
    },
    {
      firstName: 'Edward',
      lastName: 'Hanso',
      nickName: 'Ed',
      githubLinks: ['Lab02', 'Lab03', 'Lab04'],
    },
  ];
}
