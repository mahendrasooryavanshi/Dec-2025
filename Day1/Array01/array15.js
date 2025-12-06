// 1️⃣4️⃣ Convert words array → word frequency map
// Input
const array = ["apple", "banana", "apple", "cherry"];
let obj = {}
for (let char of array) {
    obj[char] = (obj[char] || 0) + 1

}
console.log(obj)

// Output
// {
//     apple: 2,
//         banana: 1,
//             cherry: 1
// }
