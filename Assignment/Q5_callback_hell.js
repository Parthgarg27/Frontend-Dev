// Q5: Callback Hell vs Async/Await

// --- Callback Hell ---
function design(cb){ setTimeout(()=>{ console.log("Design complete"); cb(); },1000); }
function build(cb){ setTimeout(()=>{ console.log("Build complete"); cb(); },1000); }
function test(cb){ setTimeout(()=>{ console.log("Test complete"); cb(); },1000); }
function deploy(cb){ setTimeout(()=>{ console.log("Deploy complete"); cb(); },1000); }
function celebrate(cb){ setTimeout(()=>{ console.log("Celebrate!"); cb(); },1000); }

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Pipeline finished (callback hell)");
                });
            });
        });
    });
});

// --- Async/Await Version ---
function wait(step) {
    return new Promise(res => setTimeout(()=>{ console.log(step); res(); }, 1000));
}

async function pipeline() {
    await wait("Design");
    await wait("Build");
    await wait("Test");
    await wait("Deploy");
    await wait("Celebrate!");
    console.log("Pipeline finished (async/await)");
}

pipeline();

// Async/await improves readability by making async code look synchronous,
// reducing nested indentation and improving maintainability.
