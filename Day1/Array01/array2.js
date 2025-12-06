// 3️⃣ Convert array to object using id as key
// Input
// [
//     { id: 101, name: "Laptop" },
//     { id: 102, name: "Mobile" }
// ]

// Output
// {
//     "101": { id: 101, name: "Laptop" },
//     "102": { id: 102, name: "Mobile" }
// }


const input = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mobile" }
]

function convertArrayToObj(input) {
    return input.reduce((acc, current) => {
        acc[current.id] = { current }
        return acc;
    }, {})
}

console.log(convertArrayToObj(input))
