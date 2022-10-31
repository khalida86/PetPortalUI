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

  GetById(id: string):Observable<[]>{
    return this.http.get<any>('/api/GetById?id='+id)
  }

  getCareSteps(id: string):Observable<any[]>{
    return this.http.get<any>('/api/GetCareSteps?id='+id)
  }
}
