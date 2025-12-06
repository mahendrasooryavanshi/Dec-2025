
// 4️⃣ Calculate total cart amount
const input =
    [
        { item: "Phone", qty: 2, price: 10000 },
        { item: "Charger", qty: 1, price: 500 }
    ]

// Output
// 20500

const result = input.reduce((acc, current) => {
    acc += current.price
    return acc;
}, 0)
console.log(result, ">>>>>>")