import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  currentTime = new Date().toString();
  userAgent = navigator.userAgent;
  languages = navigator.languages;
  isCookieEnabled = navigator.cookieEnabled;
  logicalProcessors = navigator.hardwareConcurrency || 0;
  maxTouchPoints = navigator.maxTouchPoints || 0;
}
