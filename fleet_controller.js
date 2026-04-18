class FleetController {
    constructor() {
        this.trucks = [];
    }

    addTruck(name) {
        this.trucks.push(name);
        console.log(`${name} added to fleet.`);
    }

    listFleet() {
        console.log("Fleet Trucks:");
        this.trucks.forEach(t => console.log("- " + t));
    }
}

const fleet = new FleetController();
fleet.addTruck("TRX-500");
fleet.listFleet();
