import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
// import { sourceList } from '../app.component';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {


@Input() satellites: Satellite[];

constructor() { 
    
  }
//   shouldShowWarning() : boolean {
//     return this.type.toLowerCase() === "space debris";
// } 

  ngOnInit() {
  }

}
