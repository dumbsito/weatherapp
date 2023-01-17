import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
bulean:boolean=false;
  constructor(public servi:ServiceService){

  }
  ngOnInit(): void {
   
  }
cambiar(e:boolean){
  console.log(e);
  this.bulean=e
}
}
