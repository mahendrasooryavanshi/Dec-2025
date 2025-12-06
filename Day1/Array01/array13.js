// 1️⃣2️⃣ Extract only emails
const Input =
    [
        { name: "A", email: "a@mail.com" },
        { name: "B", email: "b@mail.com" }
    ]

const result = Input.map((e) => e.email)
console.log(result)
// Output
// ["a@mail.com", "b@mail.com"]


