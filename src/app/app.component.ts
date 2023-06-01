import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petsportalui';
  user = new User();

  constructor(private authService: AuthService) {}

  login(user: User) {
    this.authService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
    });
  }

  ngOnInit() {
  }
}
