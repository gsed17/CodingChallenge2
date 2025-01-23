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
