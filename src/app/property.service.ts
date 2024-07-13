import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class ProprietesService {
  constructor(private http: HttpClient) { }
  
  addProperty(property: Property) {
    return this.http.post("http://localhost:3000/Property", property);
  }

  getProperty() {
    return this.http.get<Property[]>("http://localhost:3000/Property");
  }

  getPropertyById(id: number) {
    return this.http.get<Property>('http://localhost:3000/Property/'+id);
  }

  updateProperty(id:number,property: Property) {
    return this.http.put('http://localhost:3000/Property/'+id, property);
    
  }
}