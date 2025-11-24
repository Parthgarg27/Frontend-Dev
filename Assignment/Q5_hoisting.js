// Q5 – Hoisting Lab Fixed
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
 console.log(status);
}

// Arrow version (not hoisted)
const announce2 = () => console.log("Game started");
const startGame2 = () => console.log(status);
