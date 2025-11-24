// Q3: this issue with arrow function
const user = {
    name: "Jatin",
    showName: () => {
        console.log("Arrow this.name =", this.name);
    }
};
user.showName();

// Fix using normal function
const userFixed = {
    name: "Jatin",
    showName: function() {
        console.log("Normal this.name =", this.name);
    }
};
userFixed.showName();
