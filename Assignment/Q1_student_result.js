
// Q1: Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 50) return "C";
        return "F";
    }
}

// Test for 3 students
const students = [
    new Student("Alice", [90, 85, 88]),
    new Student("Bob", [70, 65, 72]),
    new Student("Charlie", [40, 55, 50])
];

students.forEach(s => {
    console.log(`${s.name}: Avg = ${s.calculateAverage().toFixed(2)}, Grade = ${s.getGrade()}`);
});
