import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDateFormats } from '@angular/material/core';


@Component({
  selector: 'app-show-care-info',
  templateUrl: './show-care-info.component.html',
  styleUrls: ['./show-care-info.component.css']
})

  export class ShowCareInfoComponent implements OnInit {

  private animalId: string;
  private service: any;
  public careSteps:any;
  constructor (@Inject(MAT_DIALOG_DATA)  animalId: string, 
    service: SharedService) {
      this.service = service;
      this.animalId = animalId;
    }

  @Input() CareSteps: string[]=[];

   ngOnInit(): void {
    this.service.getCareSteps(this.animalId).subscribe({
      next: (response: any) => {            
        this.careSteps = response;
        console.log(response);
      }
    });
   }
}
