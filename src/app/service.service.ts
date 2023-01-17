import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
datos:any
  constructor(private http:HttpClient) { }

  getData(city:string){

    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=05cef7418f2f80dbe889e44ff7893c87`)
  }
}
