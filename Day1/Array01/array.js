// 1️⃣ Remove duplicate objects based on id
const array = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "C" },

]



const result = array.reduce((acc, current) => {
    const exist = acc.some((item) => item.id == current.id);
    if (!exist) {
        acc.push(current)
    }
    return acc
}, []);


console.log(result)
// Output
// [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" }
// ]


