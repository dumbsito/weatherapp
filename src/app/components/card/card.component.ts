import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  implements OnInit{

day:number=0
year:number=0
month:string=""
nameDay:string=""
hora:string=""
  constructor(public weatherService:ServiceService){

  }
  ngOnInit(): void {
  let today=new Date()
  let day = today.getDate()
  let year = today.getFullYear()
  let dia = new Date().toISOString().slice(0, 10)
  let month= new Date(dia).toLocaleString('en-us',{month:'short', year:'numeric'})
  let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]

 this.day=day;
 this.year=year
 this.month=month
 this.nameDay=weekday

 let timeNow = new Date();
    
 let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
 let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
 let mainTime = `${hours}:${minutes}`;
 
 this.hora=mainTime;

}
}
