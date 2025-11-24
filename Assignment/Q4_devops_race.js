// Q4: Promise.all and Promise.race

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random()>0.2 ? resolve("Server A done") : reject("Server A failed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random()>0.2 ? resolve("Server B done") : reject("Server B failed");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
.then(() => console.log("Deployment completed for all servers"))
.catch(err => console.error("Error:", err));

Promise.race([serverA(), serverB()])
.then(msg => console.log("Fastest response:", msg))
.catch(err => console.error("Race error:", err));
