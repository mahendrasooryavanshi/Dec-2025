✅ 25 REAL-WORLD ARRAY MANIPULATION QUESTIONS (With Input + Output)
1️⃣ Remove duplicate objects based on id
Input
[
{ id: 1, name: "A" },
{ id: 2, name: "B" },
{ id: 1, name: "A" }
]

Output
[
{ id: 1, name: "A" },
{ id: 2, name: "B" }
]

2️⃣ Group orders by customer
Input
[
{ customer: "John", amount: 200 },
{ customer: "Sam", amount: 150 },
{ customer: "John", amount: 100 }
]

Output
{
John: [
{ customer: "John", amount: 200 },
{ customer: "John", amount: 100 }
],
Sam: [{ customer: "Sam", amount: 150 }]
}

3️⃣ Convert array to object using id as key
Input
[
{ id: 101, name: "Laptop" },
{ id: 102, name: "Mobile" }
]

Output
{
"101": { id: 101, name: "Laptop" },
"102": { id: 102, name: "Mobile" }
}

4️⃣ Calculate total cart amount
Input
[
{ item: "Phone", qty: 2, price: 10000 },
{ item: "Charger", qty: 1, price: 500 }
]

Output
20500

5️⃣ Merge products and prices by id
Input

products:

[{ id: 1, name: "Laptop" }]

prices:

[{ id: 1, price: 50000 }]

Output
[{ id: 1, name: "Laptop", price: 50000 }]

6️⃣ Filter employees with salary > 50k
Input
[
{ name: "A", salary: 45000 },
{ name: "B", salary: 60000 }
]

Output
[
{ name: "B", salary: 60000 }
]

7️⃣ Sort products by price (DESC)
Input
[
{ name: "Laptop", price: 50000 },
{ name: "Mouse", price: 500 }
]

Output
[
{ name: "Laptop", price: 50000 },
{ name: "Mouse", price: 500 }
]

8️⃣ Find most repeated value
Input
["red", "blue", "red", "green", "blue", "red"]

Output
"red"

9️⃣ Remove user by id
Input
[
{ id: 1, name: "A" },
{ id: 2, name: "B" }
]

remove id = 2

Output
[
{ id: 1, name: "A" }
]

1️⃣0️⃣ Update user email by id
Input
[
{ id: 1, email: "old@mail.com" }
]

Update id=1 → "new@mail.com"

Output
[
{ id: 1, email: "new@mail.com" }
]

1️⃣1️⃣ Find expired subscriptions
Input

(today = “2024-01-01”)

[
{ user: "A", expiry: "2023-12-01" },
{ user: "B", expiry: "2024-02-01" }
]

Output
[{ user: "A", expiry: "2023-12-01" }]

1️⃣2️⃣ Extract only emails
Input
[
{ name: "A", email: "a@mail.com" },
{ name: "B", email: "b@mail.com" }
]

Output
["a@mail.com", "b@mail.com"]

1️⃣3️⃣ Flatten object
Input
{
id: 1,
name: "John",
address: {
city: "Delhi",
pincode: 12345
}
}

Output
{
id: 1,
name: "John",
"address.city": "Delhi",
"address.pincode": 12345
}

1️⃣4️⃣ Convert words array → word frequency map
Input
["apple", "banana", "apple", "cherry"]

Output
{
apple: 2,
banana: 1,
cherry: 1
}

1️⃣5️⃣ Find highest priced product
Input
[
{ name: "Laptop", price: 50000 },
{ name: "Phone", price: 20000 }
]

Output
{ name: "Laptop", price: 50000 }

1️⃣6️⃣ Get unique categories
Input
[
{ category: "Electronics" },
{ category: "Fashion" },
{ category: "Electronics" }
]

Output
["Electronics", "Fashion"]

1️⃣7️⃣ Sort articles by latest date
Input
[
{ title: "A", date: "2024-01-02" },
{ title: "B", date: "2024-01-05" }
]

Output
[
{ title: "B", date: "2024-01-05" },
{ title: "A", date: "2024-01-02" }
]

1️⃣8️⃣ Paginate array (page=2, limit=3)
Input
[1,2,3,4,5,6,7,8]

Output (page 2, limit 3)
[4,5,6]

1️⃣9️⃣ Check if all tasks completed
Input
[
{ task: "A", done: true },
{ task: "B", done: false }
]

Output
false

2️⃣0️⃣ Count users per country
Input
[
{ name: "A", country: "India" },
{ name: "B", country: "USA" },
{ name: "C", country: "India" }
]

Output
{ India: 2, USA: 1 }

2️⃣1️⃣ Convert names to fullName
Input
[
{ fname: "John", lname: "Doe" }
]

Output
[
{ fullName: "John Doe" }
]

2️⃣2️⃣ Filter students who passed
Input
[
{ student: "A", marks: 30 },
{ student: "B", marks: 80 }
]

Output
[
{ student: "B", marks: 80 }
]

2️⃣3️⃣ Find average rating
Input
[
{ movie: "A", rating: 4 },
{ movie: "A", rating: 5 },
{ movie: "A", rating: 3 }
]

Output
4

2️⃣4️⃣ Remove falsy values
Input
[0, "", null, undefined, false, 2, "hello"]

Output
[2, "hello"]

2️⃣5️⃣ Find the difference between two arrays (IDs)
Input

old IDs:

[1,2,3,4]

new IDs:

[2,4]

Output

Removed items:

[1,3]
