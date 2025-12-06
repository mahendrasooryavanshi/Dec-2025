// 1️⃣1️⃣ Find expired subscriptions
// Input

//     (today = “2024-01-01”)

const input = [
    { user: "A", expiry: "2023-12-01" },
    { user: "B", expiry: "2024-02-01" }
]

const result = input.filter((e) => e.expiry < "2024-01-01")
console.log(result)

// Output
// [{ user: "A", expiry: "2023-12-01" }]