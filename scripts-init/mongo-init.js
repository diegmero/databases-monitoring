db = db.getSiblingDB('demo_db');

db.users.insertMany([
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "Bob", email: "bob@example.com", age: 30 },
  { name: "Charlie", email: "charlie@example.com", age: 35 }
]);

db.products.insertMany([
  { name: "Laptop", price: 1200, stock: 50 },
  { name: "Mouse", price: 25, stock: 200 },
  { name: "Keyboard", price: 75, stock: 150 }
]);

print("MongoDB initialized with demo data");