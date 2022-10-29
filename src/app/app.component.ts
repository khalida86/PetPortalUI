import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petsportalui';

  constructor(private dialogRef : MatDialog) {}
  // constructor (private dialogRef : MatDialog) {}
  
  openDialog() {
    this.dialogRef.open(ShowCareInfoComponent)
  }

  ngOnInit() {
    
  }

}
