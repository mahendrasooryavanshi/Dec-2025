// 2️⃣ Group orders by customer
// Input
// [
//     { customer: "John", amount: 200 },
//     { customer: "Sam", amount: 150 },
//     { customer: "John", amount: 100 }
// ]

// Output
// {
//     John: [
//         { customer: "John", amount: 200 },
//         { customer: "John", amount: 100 }
//     ],
//         Sam: [{ customer: "Sam", amount: 150 }]
// }



const input = [
    { customer: "John", amount: 200 },
    { customer: "Sam", amount: 150 },
    { customer: "John", amount: 100 }
];

// function grouping() {
//     let map = new Map()

//     for (let obj of input) {
//         if (!map.has(obj.customer)) {
//             const value = [obj]
//             map.set(obj.customer, value)
//         } else {
//             map.get(obj.customer).push(obj)
//         }
//     }

//     return map;
// }


// console.log(grouping(input))



function groupingByReduce(input) {
    const result = input.reduce((acc, current) => {
        if (!acc[current.customer]) {
            acc[current.customer] = []
        }
        acc[current.customer].push(current)
        return acc
    }, {})
    return result
}
console.log(groupingByReduce(input))