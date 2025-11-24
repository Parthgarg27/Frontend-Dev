
// Q2: Online Food Ordering (map + Error Handling)

const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150,
    fries: 80
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(`Item not found: ${item}`);
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        console.log("Order:", orderItems);
        console.log("Total Bill:", total);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

calculateBill(["pizza", "fries"]);
calculateBill(["pizza", "invalidItem"]);
