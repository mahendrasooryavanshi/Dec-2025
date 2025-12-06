// 1️⃣0️⃣ Update user email by id
const Input =
    [
        { id: 1, email: "old@mail.com" }
    ]

const result = Input.reduce((acc, current) => {
    if (acc.id == 1) {
        acc[current.email] = "old@gmail.com"
    }
    return acc
})
// console.log(result, ">>>>>>>>")
const result2 = Input.filter((ele) => ele.id == 1 ? ele.email = "old@gmail.com" : ele)
console.log(result2)
// Update id = 1 → "new@mail.com"

// Output
// [
//     { id: 1, email: "new@mail.com" }
// ]