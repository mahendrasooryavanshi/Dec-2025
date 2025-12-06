// 1️⃣6️⃣ Get unique categories
// Input
const array = [
    { category: "Electronics" },
    { category: "Fashion" },
    { category: "Electronics" }
]
const result = array.map((elemnt) => elemnt.category)
console.log(result)

// Output
// ["Electronics", "Fashion"]