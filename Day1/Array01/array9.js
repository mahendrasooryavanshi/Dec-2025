// 9️⃣ Remove user by id
const input =
    [
        { id: 1, name: "A" },
        { id: 2, name: "B" }
    ]

// remove id = 2

const result = input.filter((element) => element.id !== 2)
console.log(result)
// Output
// [
//     { id: 1, name: "A" }
// ]
