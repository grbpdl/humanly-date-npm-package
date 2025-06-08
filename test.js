const humanlyDate = require("./index");

console.log(humanlyDate("2025-03-02")); // Only date
console.log(humanlyDate("2025-05-28 10:35:00")); // SQL date + time
console.log(humanlyDate("2025-05-28T10:35:00Z")); // ISO format
console.log(humanlyDate(new Date(Date.now() - 60000))); // 1 minute ago
console.log(humanlyDate(Date.now() + 2 * 3600000)); // 2 hours remaining
console.log(humanlyDate("Invalid format")); // Invalid
