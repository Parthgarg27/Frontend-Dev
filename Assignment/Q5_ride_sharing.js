
// Q5: Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance provided.");
        }
        const rate = 12; 
        return this.distance * rate;
    }
}

// Test with error handling
try {
    const trip1 = new Trip("A", "B", 10);
    console.log("Fare:", trip1.calculateFare());
} catch (err) {
    console.error("Error:", err.message);
}

try {
    const trip2 = new Trip("A", "B", -5);
    console.log("Fare:", trip2.calculateFare());
} catch (err) {
    console.error("Error:", err.message);
}
