// 1️⃣7️⃣ Sort articles by latest date
// Input
const array = [
    { title: "A", date: "2024-01-02" },
    { title: "B", date: "2024-01-05" }
]

const result = array.sort((a, b) => new Date(b.date) - new Date(a.date))
// console.log(result, ">>>>>>")
// Output
// [
//     { title: "B", date: "2024-01-05" },
//     { title: "A", date: "2024-01-02" }
// ]