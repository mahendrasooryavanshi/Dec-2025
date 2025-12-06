// 5️⃣ Merge products and prices by id
// Input

const products = [{ id: 1, name: "Laptop" }]

const prices = [{ id: 1, price: 50000 }]

// Output
// [{ id: 1, name: "Laptop", price: 50000 }]

const result = products.map((element) => {

    for (let price of prices) {
        if (element.id === price.id) {
            element.price = price.price
        }
    }
    return element
})
console.log(result, ">>>>>>>>>")