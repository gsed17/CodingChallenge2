// Task 1 - Store Inventory
let products = ["Apples", "Bananas", "Oranges", "Grapes", "Mangoes"];
products.push("Pineapples"); // Add a new product
products.pop(); // Remove the last product
console.log("Updated Products List:", products);
// Task 2 - Student Scores
let scores = [85, 90, 78, 92, 88];
scores[1] = 95; // Update the second score
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Score:", averageScore);
// Task 3 - Employee Records
let employee = {
    name: "John Doe",
    age: 30,
    department: "Sales",
    isActive: true
};
employee.department = "Marketing"; // Update department
employee.position = "Manager"; // Add new property
console.log("Updated Employee Record:", employee);
// Task 4 - Customer Database
let customers = [
    { name: "Alice", email: "alice@example.com", purchaseAmount: 120 },
    { name: "Bob", email: "bob@example.com", purchaseAmount: 200 },
    { name: "Charlie", email: "charlie@example.com", purchaseAmount: 150 },
];
customers.push({ name: "Diana", email: "diana@example.com", purchaseAmount: 180 });
console.log("Customer List:", customers);
// Task 5 - Order Processing System
let order = {
    orderId: 1234,
    customerName: "Eve",
    amount: 250,
    calculateTax: function () {
        return this.amount * 0.1; // 10% tax
    }
};
console.log("Order Details:", order);
console.log("Tax Amount:", order.calculateTax());
