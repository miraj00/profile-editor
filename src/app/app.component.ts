import { Component } from '@angular/core';

import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profileEditor';

  user: User = {
    name: "Dave",
    age: 34,
    favoriteColor: 'black',
    interests: 'cycling',
    additionalInfo: 'please fill'
  }

}
