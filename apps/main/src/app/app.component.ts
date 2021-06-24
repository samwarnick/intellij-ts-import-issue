import { Component } from '@angular/core';
import { A } from '@intellij-ts-import-issue/mylibrary';

@Component({
  selector: 'intellij-ts-import-issue-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main';

  something: A = { answer: 0 };
}
