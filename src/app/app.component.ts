import { Component } from '@angular/core';
import { Satellite } from './satellite';
// import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  // displayList: Satellite[];
  
  
  
  constructor () {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
  
      window.fetch(satellitesUrl).then(function(response) {
        response.json().then(function(data) {
        
        let fetchedSatellites = data.satellites;
        
          for (let i =0; i < fetchedSatellites.length; i++){

            let newSatelliteObject = {
              name: fetchedSatellites[i].name,
              type: fetchedSatellites[i].type,
              orbitType: fetchedSatellites[i].orbitType,
              operational: fetchedSatellites[i].operational,
              launchDate: fetchedSatellites[i].launchDate
          };
          this.sourceList.push(newSatelliteObject);
          }
          // console.log (newSatelliteObject['name']);

          
          // TODO: LOOP OVER SATELLITES USE A FOR LOOP TO BUILD YOUR SATELLITE
          // TODO: CREAT A SATELLITE OBJECT USING new Satellite(fetchedSatellites[i]name, fetchedSatellites[i].type, fetchedSatellites[i].launchdate, festchSattellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite objet to source list using: this.sourceList.push(satellite);

      }.bind(this));
    }.bind(this));
      
  }
}    
  


