import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetsComponent } from './pets/pets.component';
import { ShowAllComponent } from './pets/show-all/show-all.component';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  constructor(private http:HttpClient) {}
  
  GetAll():Observable<any[]>{
    return this.http.get<any>('/api/GetAll')
  }

  GetByName(name: string):Observable<[]>{
    return this.http.get<any>('/api/GetByName?name='+name)
  }

  getCareSteps(name: string):Observable<any[]>{
    return this.http.get<any>('/api/GetCareSteps?name='+name)
  }
}
