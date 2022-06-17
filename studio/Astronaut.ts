import { Payload } from "./Payload";

export class Astronaut implements Payload {
    // properties and methods

    massKg : number;
    name   : string;
    static massKg: any;


  constructor(massKg: number,name: string) {
    this.massKg = massKg;
    this.name = name;
    
  }
 }


 