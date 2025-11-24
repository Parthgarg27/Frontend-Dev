// Q1: Async Coffee Maker using Promises

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Water boiled") : reject("Boiling failed");
        }, Math.random()*1000+1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Coffee brewed") : reject("Brewing failed");
        }, Math.random()*1000+1000);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Coffee poured") : reject("Pouring failed");
        }, Math.random()*1000+1000);
    });
}

boilWater()
.then(msg => { console.log(msg); return brewCoffee(); })
.then(msg => { console.log(msg); return pourCoffee(); })
.then(msg => { console.log(msg); console.log("Coffee ready for the team!"); })
.catch(err => console.error("Error:", err));
