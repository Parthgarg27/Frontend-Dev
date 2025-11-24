
// Q4: Employee Inheritance with Polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the ${this.department} team.`;
    }
}

// Runtime polymorphism
const emp = new Employee("Ravi", "Sales");
const mgr = new Manager("Karan", "Sales");

console.log(emp.work());
console.log(mgr.work());
