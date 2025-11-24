
// Q3: Product Discount System

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    return this.price - (this.price * percent) / 100;
};

// Create products
const p1 = new Product("Laptop", 50000);
const p2 = new Product("Phone", 20000);
const p3 = new Product("Headphones", 3000);

// Apply discounts
console.log("Laptop after 10% discount:", p1.applyDiscount(10));
console.log("Phone after 20% discount:", p2.applyDiscount(20));
console.log("Headphones after 5% discount:", p3.applyDiscount(5));

// Abstraction benefit demonstration
console.log("Abstraction: We hide discount logic inside applyDiscount(), simplifying usage.");
