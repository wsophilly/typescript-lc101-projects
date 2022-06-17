import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods

    totalCapacityKg: number;
    name: string;


    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string,totalCapacityKg: number ) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }

    sumMass(items: Payload[]): number {
        let totalMassKg: number = 0;
        for (const item of items) {
            totalMassKg += item.massKg;
        }
        return totalMassKg;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else return false;
    }

}