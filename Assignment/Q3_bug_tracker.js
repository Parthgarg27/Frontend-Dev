// Q3: Bug Tracker Migration to Promises

function getBugs() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            if (fail) reject("API failed!");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
.then(bugs => console.table(bugs))
.catch(err => console.error("Error:", err));
