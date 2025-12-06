// 1️⃣3️⃣ Flatten object
const input =
{
    id: 1,
    name: "John",
    address: {
        city: "Delhi",
        pincode: 12345
    }
}
// Output
// {
//     id: 1,
//         name: "John",
//             "address.city": "Delhi",
//                 "address.pincode": 12345
// }