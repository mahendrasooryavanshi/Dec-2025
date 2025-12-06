// 6️⃣ Filter employees with salary > 50k
const input =
    [
        { name: "A", salary: 45000 },
        { name: "B", salary: 60000 }
    ]

const result = input.filter((element) => element.salary > 50000)
console.log(result)
// Output
// [
//     { name: "B", salary: 60000 }
// ]