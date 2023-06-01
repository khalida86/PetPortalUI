import { Component, Inject, Input, OnInit } from '@angular/core';
import { PetsComponent } from '../pets.component';
import { PetModel } from 'src/app/models/pet-model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  private response: any;
  private service: any;

  constructor(@Inject(MAT_DIALOG_DATA) response: any, service: SharedService) {
    this.service = service;
    this.response = response;
  }

  ngOnInit(): void {
  }

  savePetChanges() {
    this.service.updatePet(this.response)
  }

}

// export class ShowCareInfoComponent implements OnInit {

//   private animalId: string;
//   private service: any;
//   public careSteps:any;
//   constructor (@Inject(MAT_DIALOG_DATA)  animalId: string, 
//     service: SharedService) {
//       this.service = service;
//       this.animalId = animalId;
//     }

//   @Input() CareSteps: string[]=[];

//    ngOnInit(): void {
//     this.service.getCareSteps(this.animalId).subscribe({
//       next: (response: any) => {            
//         this.careSteps = response;
//         console.log(response);
//       }
//     });
//    }
// }