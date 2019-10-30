import { Component } from '@angular/core';
import { Satellite } from './satellite';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  
  
  
  constructor () {
  //   this.sourceList = [
  //     new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
  //     new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
  //     new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
  //     new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
  //     new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
  //   ];
  
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
  
    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {
        let fetchedSatellites = data.satellites;

          let newSatelliteObject = {
              name: fetchedSatellites[name],
              type: fetchedSatellites[this.type],
              orbitType: fetchedSatellites[this.orbitType],
              operational: fetchedSatellites[this.operational],
              launchDate: fetchedSatellites[this.launchDate],
          };
          for (let i =0; i < fetchedSatellites.length; i++){
            let data.satellites = this.source.List(newSatelliteObject);
            console.log(i);
          }
          console.log (newSatelliteObject['name']);

          
          // TODO: LOOP OVER SATELLITES USE A FOR LOOP TO BUILD YOUR SATELLITE
          // TODO: CREAT A SATELLITE OBJECT USING new Satellite(fetchedSatellites[i]name, fetchedSatellites[i].type, fetchedSatellites[i].launchdate, festchSattellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite objet to source list using: this.sourceList.push(satellite);

      }.bind(this));
    }.bind(this));
      
  }
}    
  


