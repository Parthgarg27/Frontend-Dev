// Utility function to simulate async step with random failure
function simulateStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 sec

    console.log(`${stepName} started...`);

    setTimeout(() => {
      // 30% failure chance
      const failed = Math.random() < 0.3;

      if (failed) {
        console.log(`${stepName} failed!`);
        reject(stepName);
      } else {
        console.log(`${stepName} completed.`);
        resolve();
      }
    }, delay);
  });
}

// Main Emergency Handler
async function handleEmergency() {
  try {
    await simulateStep("registerPatient");
    await simulateStep("assignDoctor");
    await simulateStep("startDiagnosis");
    await simulateStep("startTreatment");

    console.log("Patient is treated successfully!");
  } catch (err) {
    console.log("Emergency handling failed!");
  }
}

// Run the system
handleEmergency();
