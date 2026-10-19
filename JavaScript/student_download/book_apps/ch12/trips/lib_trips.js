"use strict";

class Trip {
    constructor(destination, miles, gallons) {
        this.destination = destination;
        this.miles = parseFloat(miles);
        this.gallons = parseFloat(gallons);
    }
    get mpg() {                  // a read-only property        
        return this.miles / this.gallons;
    }

    toString() {                 // override existing method
        const mpg = this.mpg.toFixed(1);
        return `${this.destination}: Miles - ${this.miles}; MPG - ${mpg}`;
    }
}

class Trips {
    #trips = null;               // a private field    

    constructor() {
        this.#trips = [];       
    }

    push(trip) {
        if (trip instanceof Trip) {  // only add valid Trip objects
            this.#trips.push(trip);
        } else {
            throw new Error("Must be a Trip object.");
        }
    }

    get averageMpg() {              // a read-only property
        let totalMiles = 0;        
        let totalGallons = 0;        
        for (let trip of this.#trips) {
            totalMiles += trip.miles;
            totalGallons += trip.gallons;
        }
        return totalMiles / totalGallons;
    }

    toString() {                 // override existing method
        let str = "";
        for (let trip of this.#trips) {
            str += trip + "\n";
        }
        str += "\nAverage MPG: " + this.averageMpg.toFixed(1);
        return str;
    }
}