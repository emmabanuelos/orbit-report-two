export class Satellite {
    satelliteName: string;
    satelliteOrbitType: string;
    satelliteType: string;
    satelliteOperational: boolean;
    satelliteLaunchDate: string;

    constructor(name:string, type:string, launchDate:string, orbitType: string, operational: boolean) {
        name = this.satelliteName;
        orbitType = this.satelliteOrbitType;
        type = this.satelliteType;
        operational = this.satelliteOperational;
        launchDate = this.satelliteLaunchDate;
    }
}
