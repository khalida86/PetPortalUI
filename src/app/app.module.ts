import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { ShowAllComponent } from './pets/show-all/show-all.component';
import { ShowIndividualComponent } from './pets/show-individual/show-individual.component';
import { SharedService } from './shared.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
//import { EditPetComponent } from './pets/edit-pet/edit-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsComponent,
    ShowAllComponent,
    ShowIndividualComponent,
    ShowCareInfoComponent,
    //EditPetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [SharedService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
