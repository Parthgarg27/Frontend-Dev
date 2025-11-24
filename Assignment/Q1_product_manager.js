// Q1: E-Commerce Product Manager
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 500, "Accessories"),
    new Product(3, "Chair", 1500, "Furniture")
];

const expensiveProducts = products.filter(p => p.price > 1000);
console.log(expensiveProducts.map(p => p.getDetails()).join("\n"));
