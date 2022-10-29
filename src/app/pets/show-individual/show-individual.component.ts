import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute , Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCareInfoComponent } from '../show-care-info/show-care-info.component';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

// import { ShowCareInfoComponent } from '../show-care-info/show-care-info.component';

@Component({
  selector: 'app-show-individual',
  templateUrl: './show-individual.component.html',
  styleUrls: ['./show-individual.component.css'],
})

export class ShowIndividualComponent implements OnInit {
  name: any;

  constructor(private service: SharedService, private router: Router, private route: ActivatedRoute, public dialog : MatDialog) { }

  PetDetails: any=[];
  PetCare: any;

  ngOnInit(): void {
    
    this.route.paramMap.subscribe( {
      next: (params) => {
        const name = params.get('name');
        console.log(params);
        if (name) {
          this.service.GetByName(name).subscribe({
            next: (response) => {
              this.PetDetails = response;
              // console.log(response);
            }
          });
          this.service.getCareSteps(name).subscribe(d=>{
            this.PetCare=d;
            // console.log(d);
          });
        }
      }
    })
  }

  openDialog(name: string): void {
    let config: MatDialogConfig<string> = new MatDialogConfig();
    config.disableClose = false;
    let d: any = {val : name};
    config.data = name;
    this.dialog.open(ShowCareInfoComponent, config);
  }
}
