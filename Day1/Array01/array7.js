// 7️⃣ Sort products by price(DESC)
const input =
    [
        { name: "Laptop", price: 50000 },
        { name: "Mouse", price: 500 }
    ]

const result = input.sort((a, b) => b.price - a.price)
console.log(result, ">>>>>>>")

// Output
// [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 }
// ]