// Q2: Micro vs Macro Task Scheduler

console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout fired"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise.then executed"));

console.log("Synchronous log");

console.log("End");

// Microtasks run before macrotasks because they have higher priority
// in the JS event loop, processed immediately after current stack.
