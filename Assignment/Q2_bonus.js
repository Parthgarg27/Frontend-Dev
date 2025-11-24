"use strict";
// Q2 – Employee Bonus Calculator
const employees = [
 { name: "Amit", salary: "45000", years: "5" },
 { name: "Sara", salary: "38000", years: "2" },
 { name: "Kiran", salary: "52000", years: "7" }
];

for (let emp of employees) {
  try {
    if (!emp.name || !emp.salary || !emp.years) throw new Error("Missing property");
    let salary = Number(emp.salary);
    let years = Number(emp.years);
    if (isNaN(salary) || isNaN(years)) throw new Error("Conversion error");

    let bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`);
  } catch (e) {
    console.error(`Error for ${emp.name}: ${e.message}`);
  }
}
