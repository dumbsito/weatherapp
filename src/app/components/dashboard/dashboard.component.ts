import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

city:string=""
@Output() onBoolean=new EventEmitter<any>()
bulean:boolean=false
  constructor(public weatherService:ServiceService){
 

  }
  ngOnInit(): void {
  this.weatherService.getData("rome").subscribe(data=>{
    this.weatherService.datos=data;
  })
  
  }

  onSubmit(){
    this.weatherService.getData(this.city).subscribe(data=>{
   
      
      this.bulean=true
    this.onBoolean.emit(this.bulean)
      
this.weatherService.datos=data

    })

    
  }

  telAviv:string="Tel Aviv"
  newYork:string="New York"
  tokyo:string="Tokyo"
  paris:string="Paris"
  redirect(query:string){
    this.weatherService.getData(query).subscribe(data=>{
      console.log(data);
      
      this.bulean=true
    this.onBoolean.emit(this.bulean)
      
this.weatherService.datos=data

    })

  }
}
