import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute , Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCareInfoComponent } from '../show-care-info/show-care-info.component';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { EditPetComponent } from '../edit-pet/edit-pet.component';
//import { EditPetComponent } from '../edit-pet/edit-pet.component';

@Component({
  selector: 'app-show-individual',
  templateUrl: './show-individual.component.html',
  styleUrls: ['./show-individual.component.css'],
})

export class ShowIndividualComponent implements OnInit {
  id: any;

  constructor(private service: SharedService, private router: Router, private route: ActivatedRoute, public dialog : MatDialog) { }

  PetDetails: any=[];
  PetCare: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe( {
      next: (params) => {
        const id = params.get('id');
        console.log(params);
        if (id) {
          this.service.getById(id).subscribe({
            next: (response) => {
              this.PetDetails = response;
            }
          });
          this.service.getCareSteps(id).subscribe(d=>{
            this.PetCare=d;
          });
        }
      }
    })
  }

  openDialog(id: string): void {
    let config: MatDialogConfig<string> = new MatDialogConfig();
    config.disableClose = false;
    let d: any = {val : id};
    config.data = id;
    this.dialog.open(ShowCareInfoComponent, config);
  }

  editDialogTwo(response: []): void{
    let config: MatDialogConfig<[]> = new MatDialogConfig();
    config.disableClose = false;
    let d: any = {val : response};
    config.data = response;
    this.dialog.open(EditPetComponent, config);
  }
}
